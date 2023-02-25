import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';

import { PlanoViewerComponent } from './plano-viewer/plano-viewer.component';
import { ListaPlanosComponent } from './lista-planos/lista-planos.component';
import { PlanosRoutingModule } from './plano-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    TooltipModule,
    PlanosRoutingModule
  ],
  declarations: [ListaPlanosComponent, PlanoViewerComponent]
})
export class PlanoModule { }
