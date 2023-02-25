import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { UpdateAssinaturaService } from '../../service/update-assinatura.service';
import { LayoutService } from '../../service/app.layout.service';
import { ResumoPlanoAssinado } from '../../model/ResumoPlanoAssinado';

@Component({
  selector: 'app-pagamento-viewer',
  templateUrl: './pagamento-viewer.component.html',
  styleUrls: ['./pagamento-viewer.component.scss']
})
export class PagamentoViewerComponent {
  paymentId: any;
  preferenceId: any;
  paymentType: any;
  codigoPagamento: any = '';
  resumoPlano: ResumoPlanoAssinado = new ResumoPlanoAssinado();

  constructor(public layoutService: LayoutService, public assinaturaService: UpdateAssinaturaService,
    private route: ActivatedRoute, private messageService: MessageService) {
    this.paymentId = this.route.snapshot.queryParams['payment_id'];
    this.preferenceId = this.route.snapshot.queryParams['preference_id'];
    this.paymentType = this.route.snapshot.queryParams['payment_type'];
  }
  ngOnInit(): void {
    if (this.paymentId != null && this.paymentId != 'undefined' && this.preferenceId != null && this.preferenceId != 'undefined') {
      this.assinaturaService.atualizar(this.paymentId, this.paymentType, this.preferenceId).then(data => {
        this.resumoPlano.codigo = data['codigo'];
        this.resumoPlano.modulo = data['modulo'];
        this.resumoPlano.plano = data['plano'];
        this.resumoPlano.valor = data['valor'];
        this.resumoPlano.mensagem = data['mensagem'];
        this.codigoPagamento = this.paymentId;
        this.showInfoViaToast();
      }
      );
    }
  }

  showInfoViaToast() {
    if (this.resumoPlano.sucesso === true) {
      var informacoes = `${this.resumoPlano.mensagem} - Código do Pagamento: ${this.paymentId}`;
      this.messageService.add({ key: 'msgRetornoPagamento', severity: 'success', summary: 'Atenção! Informações do pagamento', detail: informacoes });
    } else {
      var informacoes = this.resumoPlano.mensagem;
      this.messageService.add({ key: 'msgRetornoPagamento', severity: 'info', summary: 'Ops! Informações do pagamento', detail: informacoes });
    }
  }
}
