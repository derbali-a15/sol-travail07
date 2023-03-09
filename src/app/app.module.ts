import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { GestioncomptesComponent } from './gestioncomptes/gestioncomptes.component';
import { FormsModule } from '@angular/forms';
import { BanquesComponent } from './banques/banques.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    GestioncomptesComponent,
    BanquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
