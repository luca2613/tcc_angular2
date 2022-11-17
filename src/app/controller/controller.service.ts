import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CategoriaResponse } from '../model/Categoria';
import { LivroResponse } from '../model/Livro';
import { AutorResponse } from '../model/Autor';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  apiUrl = 'http://localhost:3000';
  
  categoria: CategoriaResponse[] | null = null;
  livro: LivroResponse[] | null = null;
  livroCategoria: LivroResponse[] | null = null;
  autor: AutorResponse[] | null = null;

  constructor(private http:HttpClient) { }

  // categoria
  getCategorias() {
    this.http.get<CategoriaResponse[]>(
      this.apiUrl + "/categorias"
    ).subscribe(
      (response) => {
        this.categoria = response;
      },
    );
    return false;
  }

  // livros
  getLivrosByLast() {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/lastLivros"
    ).subscribe(
      (response) => {
        this.livro = response;
      },
    );
    return false;
  }

  getLivros() {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros"
    ).subscribe(
      (response) => {
        this.livro = response;
      },
    );
    return false;
  }

  getLivroById(id:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/" + id
    ).subscribe(
      (Response) => {
        this.livro = Response;
      }
    )
    return false;
  }

  getLivroByCategoria(nome:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/categoria/" + nome
    ).subscribe(
      (Response) => {
        this.livroCategoria = Response;
        console.log(this.livroCategoria)
      }
    )
    return false;
  }

}
