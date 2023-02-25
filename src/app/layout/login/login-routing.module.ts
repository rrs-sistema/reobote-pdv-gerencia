import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginViewerComponent } from './login-viewer/login-viewer.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'usuarios', data: { breadcrumb: 'Login' }, component: LoginViewerComponent },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
