import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compte } from '../entities/compte';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent {
  comptes:Compte[] = []
  idClient = 0

  constructor(private api: RestapiService, private router:ActivatedRoute){
   
  }
  ngOnInit(){
     //recupérer l'id du client à partir de l'adresse URL
     let id =  this.router.snapshot.paramMap.get('id')
     console.log(id)
     if(id != null){
      this.idClient = parseInt(id)
       this.api.getComptesByClient(parseInt(id)).subscribe((res) => this.comptes = res)
     }
  }
}
