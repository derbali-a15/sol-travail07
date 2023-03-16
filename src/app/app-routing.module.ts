import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BanquesComponent } from './banques/banques.component';
import { ClientsComponent } from './clients/clients.component';
import { ComptesComponent } from './comptes/comptes.component';
import { GestioncomptesComponent } from './gestioncomptes/gestioncomptes.component';

const routes: Routes = [
  {path:'banques', component:BanquesComponent},
  {path:'clientsparbanque/:id', component:ClientsComponent},
  {path:'comptesparclient/:id', component:ComptesComponent},
  {path:'modifiercompte/:id/client/:idClient', component:GestioncomptesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
