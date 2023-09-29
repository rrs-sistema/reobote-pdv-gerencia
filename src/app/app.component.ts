import { TesteServidorService } from './layout/service/teste-servidor.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, public assinaturaService: TesteServidorService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.assinaturaService.welcomeReobotePdv().then(data => {
    }
    );
  }
}
