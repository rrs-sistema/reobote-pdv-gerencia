import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';

import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { CoreModule } from './core/core.module';
import { PagamentoViewerComponent } from './layout/pagamento/pagamento-viewer/pagamento-viewer.component';
import { LoginModule } from './demo/components/auth/login/login.module';


@NgModule({
  declarations: [
    AppComponent, NotfoundComponent, PagamentoViewerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppLayoutModule,
    LoginModule,
    CoreModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
