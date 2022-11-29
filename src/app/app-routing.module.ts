import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorDetalheComponent } from './view/autor-detalhe/autor-detalhe.component';
import { HomeComponent } from './view/home/home.component';
import { LivroDetalheComponent } from './view/livro-detalhe/livro-detalhe.component';
import { LivrosCategoriaComponent } from './view/livros-categoria/livros-categoria.component';
import { LivrosComponent } from './view/livros/livros.component';
import { LoginAutorComponent } from './view/login-autor/login-autor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'livros', component: LivrosComponent},
  {path: 'livro', component: LivroDetalheComponent},
  {path: 'livros/:nm_categoria', component: LivrosCategoriaComponent},
  {path: 'login', component: LoginAutorComponent},
  {path: 'autor', component: AutorDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
