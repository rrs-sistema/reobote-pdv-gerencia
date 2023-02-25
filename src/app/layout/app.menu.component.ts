import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Planos de pagamentos',
        items: [
          { label: 'Listas', icon: 'pi pi-fw pi-bars', routerLink: ['/lista-plano/planos'] },
        ]
      },
      {
        label: 'Retorno do pagamento',
        items: [
          { label: 'Pagamento', icon: 'pi pi-fw pi-bars', routerLink: ['/retorno-pagamento'] },
        ]
      },
      {
        label: 'Usuário',
        items: [
          { label: 'Usuário', icon: 'pi pi-fw pi-user', routerLink: ['/usuarios/login'] },
        ]
      },
      {
        label: 'Modelos',
        items: [
          { label: 'Modelos para atualização', icon: 'pi pi-fw pi-list', routerLink: ['/blocks'], badge: 'NEW' },
        ]
      },
    ];
  }
}
