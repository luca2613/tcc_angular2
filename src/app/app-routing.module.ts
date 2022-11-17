import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LivroDetalheComponent } from './view/livro-detalhe/livro-detalhe.component';
import { LivrosCategoriaComponent } from './view/livros-categoria/livros-categoria.component';
import { LivrosComponent } from './view/livros/livros.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'livros', component: LivrosComponent},
  {path: 'livro', component: LivroDetalheComponent},
  {path: 'livros/:nm_categoria', component: LivrosCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
