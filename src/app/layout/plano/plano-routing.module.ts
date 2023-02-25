import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaPlanosComponent } from './lista-planos/lista-planos.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'planos', data: { breadcrumb: 'Planos de pagamentos' }, component: ListaPlanosComponent },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class PlanosRoutingModule { }
