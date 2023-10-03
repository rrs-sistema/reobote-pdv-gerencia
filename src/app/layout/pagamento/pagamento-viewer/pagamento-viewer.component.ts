import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { UpdateAssinaturaService } from '../../service/update-assinatura.service';
import { ResumoPlanoAssinado } from '../../model/ResumoPlanoAssinado';
import { LayoutService } from '../../service/app.layout.service';
import { TesteServidorService } from '../../service/teste-servidor.service';

@Component({
  selector: 'app-pagamento-viewer',
  templateUrl: './pagamento-viewer.component.html',
  styleUrls: ['./pagamento-viewer.component.scss']
})
export class PagamentoViewerComponent {
  topic: any;
  id: any;
  resumoPlano: ResumoPlanoAssinado = new ResumoPlanoAssinado();

  constructor(public layoutService: LayoutService, public assinaturaService: UpdateAssinaturaService,
    public testeServidorService: TesteServidorService,
    private route: ActivatedRoute, private messageService: MessageService) {
    this.topic = this.route.snapshot.queryParams['topic'];
    this.id = this.route.snapshot.queryParams['id'];
  }
  ngOnInit(): void {
    if (this.id != null && this.id != 'undefined') {
      this.assinaturaService.atualizar(this.id, this.topic).then(data => {
        console.log(`ENTROU NA PAGINA DE RETORNO DE PAGAMENTO PAYMENT_ID: ${this.id} - TOPIC: ${this.topic}`);
        this.showInfoViaToast();
      }
      );
    } else {
      console.log('NÃO OS DADOS DE PAGAMENTOS PARA O SERVIDOR');
    }
  }

  showInfoViaToast() {
    if (this.resumoPlano.sucesso === true) {
      var informacoes = `${this.resumoPlano.mensagem} - Código do Pagamento: ${this.id}`;
      this.messageService.add({ key: 'msgRetornoPagamento', severity: 'success', summary: 'Atenção! Informações do pagamento', detail: informacoes });
    } else {
      var informacoes = this.resumoPlano.mensagem;
      this.messageService.add({ key: 'msgRetornoPagamento', severity: 'info', summary: 'Ops! Informações do pagamento', detail: informacoes });
    }
  }
}
