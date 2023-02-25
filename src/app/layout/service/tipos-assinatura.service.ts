import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ResumoTipoPagamento } from '../model/ResumoTipoPagamento';
import { environment } from './../../../environments/environment';
import { MoneyHttp } from 'src/app/seguranca/money-http';

@Injectable({
  providedIn: 'root'
})
export class TipoAssinaturaService {

  apiUrl: string;

  constructor(private http: MoneyHttp, private httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/tipo-plano`;
  }

  async resumoPagamento() {
    var urlAPI = `${this.apiUrl}/resumo-pagamento`;
    const res = await this.httpClient.get<ResumoTipoPagamento[]>(urlAPI)
    return res;
  }

}
