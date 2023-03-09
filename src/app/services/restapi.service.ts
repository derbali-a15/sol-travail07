import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banque } from '../entities/banque';
import { Client } from '../entities/client';
import { Compte } from '../entities/compte';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  url: string = "http://localhost:8080/travail04_war_exploded/api/"
  constructor(private http:HttpClient) { }

  //consultation
  getBanques():Observable<Banque[]>{
    return this.http.get<Banque[]>(this.url  + 'banques')
  }

  getClientsByBanque(idBanque:number): Observable<Client[]>{
    return this.http.get<Client[]>(this.url  + 'clients/banque/' + idBanque)
  }

  getComptesByClient(idClient:number): Observable<Compte[]>{
    return this.http.get<Compte[]>(this.url  + 'comptes/client/' + idClient)
  }

  //mise à jour
  updateCompte(id:number, op:string, montant:number): Observable<Compte>{
    return this.http.put<Compte>(this.url + 'comptes/v2/' + id + '/' + op + '/' + montant, null)
  }
}
