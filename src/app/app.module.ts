import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GerenciamentoVendedorComponent } from './components/gerenciamento-vendedor/gerenciamento-vendedor.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JogadorFutebolComponent } from './component/admin/jogador-futebol/jogador-futebol.component';
import { JogoComponent } from './component/admin/jogo/jogo.component';
import { ClubeFutebolComponent } from './component/admin/clube-futebol/clube-futebol.component';


import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    GerenciamentoVendedorComponent,
    InicioComponent,
    ClubeFutebolComponent,
    JogadorFutebolComponent,
    JogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
