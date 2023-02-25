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

  async atualizar(paymentId: any, paymentType: any, preferenceId: any) {
    var valoresParametros = `&payment_id=${paymentId}&payment_type=${paymentType}&preference_id=${preferenceId}`;
    var urlAPI = `${this.apiUrl}/mercado-pago?${valoresParametros}`;
    const res = await this.httpClient.get<any>(urlAPI)
      .toPromise();
    //const data = res as ResumoPlanoAssinado;
    return res;
  }

}
