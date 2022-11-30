import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CategoriaResponse } from '../model/Categoria';
import { LivroResponse } from '../model/Livro';
import { AutorResponse } from '../model/Autor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  menuPrincipal!: boolean;
  menuAutor!: boolean;

  apiUrl = 'http://localhost:3000';
  
  categoria: CategoriaResponse[] | null = null;
  livro: LivroResponse[] | null = null;
  livroCategoria: LivroResponse[] | null = null;
  livroAutor: LivroResponse[] | null = null;
  // autor: AutorResponse[] | null = null;

  constructor(private http:HttpClient) { }


  login(data:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/autor/login`,data);
  }

  getToken() {
    return localStorage.getItem('token');
  } 

  getId() {
    return localStorage.getItem('id');
  }

  getNome() {
    return localStorage.getItem('nome');
  }
  

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
      }
    )
    return false;
  }

  getLivrosByAutor(id:any) {
    this.http.get<LivroResponse[]>(
      this.apiUrl + "/livros/livrosAutor/" + id,
    ).subscribe(
      (Response) => {
        this.livroAutor = Response;
      },
    )
    return false;
  }

  deleteLivro( id: any, autor:any) {
    this.http.delete(
      this.apiUrl + '/livros/' + id, {
        headers: { 'Authorization': 'Bearer ' + this.getToken() }
      }
    ).subscribe(
      (response) => {
        this.getLivrosByAutor(autor);
      },
      (error) => {
        alert(error);
      }
    );
  }

}
