import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {InputTextModule} from 'primeng/inputtext';
import { CategoriasComponent } from './categorias/categorias.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { MonteSeuPcComponent } from './monte-seu-pc/monte-seu-pc.component';
import { EscolhaSeuPcComponent } from './escolha-seu-pc/escolha-seu-pc.component';
import { PerifericosComponent } from './perifericos/perifericos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CategoriasComponent,
    RecuperarSenhaComponent,
    CarrinhoComponent,
    MonteSeuPcComponent,
    EscolhaSeuPcComponent,
    PerifericosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
