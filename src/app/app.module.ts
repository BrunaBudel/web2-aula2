import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { InserirUsuarioComponent } from './usuario/inserir-usuario/inserir-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    InserirUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
