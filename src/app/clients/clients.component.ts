import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../entities/client';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients:Client[] = []

  constructor(private api: RestapiService, private router:ActivatedRoute){
   
  }
  ngOnInit(){
     //recupérer l'id de la banque de l'adresse URL
     let id =  this.router.snapshot.paramMap.get('id');
     console.log(id)
     if(id != null){
       this.api.getClientsByBanque(parseInt(id)).subscribe((res) => this.clients = res)
     }
  }
}
