import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Banque } from '../entities/banque';

import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-banques',
  templateUrl: './banques.component.html',
  styleUrls: ['./banques.component.css']
})
export class BanquesComponent {
  banques:Banque[]= []
  

  constructor(private api: RestapiService, private router:Router){
    this.api.getBanques().subscribe((res) => this.banques = res)
  }

}
