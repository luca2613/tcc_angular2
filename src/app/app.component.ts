import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerService } from './controller/controller.service';
import { CategoriaResponse } from 'src/app/model/Categoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public service:ControllerService,public router:Router){}
  
  ngOnInit(): void {
    this.service.getCategorias();
  }
}
