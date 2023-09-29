import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ResumoTipoPagamento } from '../model/ResumoTipoPagamento';
import { environment } from './../../../environments/environment';
import { MoneyHttp } from 'src/app/seguranca/money-http';

@Injectable({
  providedIn: 'root'
})
export class TesteServidorService {

  apiUrl: string;

  constructor(private http: MoneyHttp, private httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/welcome`;
  }

  async welcomeReobotePdv() {
    var urlAPI = `${this.apiUrl}`;
    this.httpClient.get<String[]>(urlAPI)
  }

}
