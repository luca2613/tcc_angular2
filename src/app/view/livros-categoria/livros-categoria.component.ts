import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/controller/controller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros-categoria',
  templateUrl: './livros-categoria.component.html',
  styleUrls: ['./livros-categoria.component.css']
})
export class LivrosCategoriaComponent implements OnInit {

  categoria:string | null = null;

  constructor(public service:ControllerService,public router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.categoria = params.get('nm_categoria');
    });
    this.service.getLivroByCategoria(this.categoria);
    
  }

}
