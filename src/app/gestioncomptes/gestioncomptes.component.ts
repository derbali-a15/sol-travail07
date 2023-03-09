import { Component } from '@angular/core';
import { Compte } from '../entities/compte';

@Component({
  selector: 'app-gestioncomptes',
  templateUrl: './gestioncomptes.component.html',
  styleUrls: ['./gestioncomptes.component.css']
})
export class GestioncomptesComponent {
  compte:Compte = new Compte(0, '', 0)

  

  updateCompte(){
  }
}
