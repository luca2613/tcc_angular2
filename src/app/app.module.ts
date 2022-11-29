import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { LivrosComponent } from './view/livros/livros.component';
import { LivroDetalheComponent } from './view/livro-detalhe/livro-detalhe.component';
import { LivrosCategoriaComponent } from './view/livros-categoria/livros-categoria.component';
import { LoginAutorComponent } from './view/login-autor/login-autor.component';
import { AutorDetalheComponent } from './view/autor-detalhe/autor-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivrosComponent,
    LivroDetalheComponent,
    LivrosCategoriaComponent,
    LoginAutorComponent,
    AutorDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
