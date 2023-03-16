import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Banque } from './entities/banque';

import { RestapiService } from './services/restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travail07';
  banques:Banque[]= []
  

  constructor(private api: RestapiService, private router:Router){
    this.api.getBanques().subscribe((res) => this.banques = res)
  }

}
