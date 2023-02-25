import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(
    private router: Router,
    private http: HttpClient,

    private jwtHelper: JwtHelperService
  ) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.carregarToken();
  }

  login(usuario: string, senha: string): Observable<void> {
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded').append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .pipe(tap<any>(
        data => {
          this.armazenarToken(data.access_token);
        }
      ));
  }

  async obterNovoAccessToken(): Promise<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    const body = 'grant_type=refresh_token';

    try {
      const response = await this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
        .toPromise();
      this.armazenarToken(response.access_token);
      return await Promise.resolve(null);
    } catch (response_1: any) {
      this.limparAccessToken();
      if (response_1?.status != null && response_1.status === 401)
        this.router.navigate(['/reobote-pdv-regencia/login']);

      else
        return Promise.resolve(null);
    }
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles: string[]) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }

}
