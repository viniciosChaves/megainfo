import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { MonteSeuPcComponent } from './monte-seu-pc/monte-seu-pc.component';
import { EscolhaSeuPcComponent } from './escolha-seu-pc/escolha-seu-pc.component';
import { PerifericosComponent } from './perifericos/perifericos.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'monte-seu-pc', component: MonteSeuPcComponent },
  { path: 'escolha-seu-pc', component: EscolhaSeuPcComponent },
  { path: 'perifericos', component: PerifericosComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
