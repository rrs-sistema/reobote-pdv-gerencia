import { ResumoTipoPagamento } from './../../model/ResumoTipoPagamento';
import { Component } from '@angular/core';

import { TipoAssinaturaService } from '../../service/tipos-assinatura.service';

@Component({
  selector: 'app-lista-planos',
  templateUrl: './lista-planos.component.html',
  styleUrls: ['./lista-planos.component.scss']
})
export class ListaPlanosComponent {

  resumoPlanos!: ResumoTipoPagamento[] | ResumoTipoPagamento[];

  constructor(
    public tipoAssinaturaService: TipoAssinaturaService,
  ) {

  }
  ngOnInit(): void {
    this.tipoAssinaturaService.resumoPagamento().then(data => {
      console.log(`RESULT --> ${data}`);
      data.forEach(item => {
        this.resumoPlanos = item;
      });;
    }
    );
  }

}
