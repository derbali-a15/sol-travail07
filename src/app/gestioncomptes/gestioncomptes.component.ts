import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../entities/compte';
import { Operation } from '../entities/operation';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-gestioncomptes',
  templateUrl: './gestioncomptes.component.html',
  styleUrls: ['./gestioncomptes.component.css']
})
export class GestioncomptesComponent {
  compte:Compte = new Compte(0, '', 0)
  operation:Operation = new Operation(0, '', 0)
  idClient = 0
  constructor(private router:ActivatedRoute, private restApi: RestapiService, private redirect:Router){}

  ngOnInit(){
     //recupérer l'id du compte à modifier à partir de l'adresse URL
     let id =  this.router.snapshot.paramMap.get('id');
     //recupérer l'idClient du client
     let id_client =  this.router.snapshot.paramMap.get('idClient');
     console.log(id)
     if(id != null && id_client != null){
       this.idClient = parseInt(id_client)
        this.restApi.getCompteById(parseInt(id)).subscribe((res) => {
                    this.compte = res
                    this.operation.idCompte = this.compte.id
                  })
        
     }
  }

  modifierCompte(){
    //console.log(this.compte)
    this.restApi.updateCompte(this.operation).subscribe((res) => {
      this.compte = res
      this.redirect.navigate(['/comptesparclient', this.idClient])
    })

    
  }
}
