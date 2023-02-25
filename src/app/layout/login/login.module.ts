import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './../../demo/components/auth/login/login-routing.module';
import { LoginViewerComponent } from './login-viewer/login-viewer.component';


@NgModule({
  declarations: [
    LoginViewerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
