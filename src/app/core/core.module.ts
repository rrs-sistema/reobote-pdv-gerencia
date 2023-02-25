import { MoneyHttp } from './../seguranca/money-http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../seguranca/auth.service';
import { UpdateAssinaturaService } from '../layout/service/update-assinatura.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'primeng/api';
import { MessageComponent } from './messagem/message.component';

registerLocaleData(localePt);

@NgModule({
  imports: [

  ],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [
    UpdateAssinaturaService,
    JwtHelperService,
    MessageService,
    //AuthService,
    MoneyHttp,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' },
  ]
})
export class CoreModule { }
