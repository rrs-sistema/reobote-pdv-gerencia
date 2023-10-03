import { HttpClient } from '@angular/common/http';
import { ResumoPlanoAssinado } from './../model/ResumoPlanoAssinado';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { MoneyHttp } from 'src/app/seguranca/money-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateAssinaturaService {

  apiUrl: string;

  constructor(private http: MoneyHttp, private httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/retorno-pagamento`;
  }

  async atualizar(id: any, topic: any,) {
    var valoresParametros = `?topic=${topic}&id=${id}`;
    //https://15.235.55.109:10180/retorno-pagamento?topic=payment&id=123456
    var urlAPI = `${this.apiUrl}${valoresParametros}`;
    const res = await this.httpClient.get<any>(urlAPI)
      .toPromise();
    //const data = res as ResumoPlanoAssinado;
    return res;
  }

}
