import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-autor-painel',
  templateUrl: './autor-painel.component.html',
  styleUrls: ['./autor-painel.component.css']
})
export class AutorPainelComponent implements OnInit {


  constructor(public service:ControllerService,private route:Router, private router: ActivatedRoute) { 
    this.service.menuPrincipal = false;
    this.service.menuAutor = true;
  }

  isVisible: boolean = false;

  token = this.service.getToken();
  id = this.service.getId();
  nome = this.service.getNome();
  select:any;
  
  changeSelect(e:any) {
    this.select = e.target.value;
  }

  ngOnInit(): void {
    this.service.getLivrosByAutor(this.id);
    this.service.getCategorias();
  }

  show(): void{
    this.isVisible = !this.isVisible;
  }
}
