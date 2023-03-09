import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BanquesComponent } from './banques/banques.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path:'banques', component:BanquesComponent},
  {path:'clientsparbanque/:id', component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
