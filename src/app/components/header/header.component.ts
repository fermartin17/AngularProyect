import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log("header creandose");
   }

  ngOnInit() {
    console.log("header creado");
  }

  hello: string  = "header works! Fer crack";

  arr : Array<number> = [1,2,3,4,5,6,7,8];

  cambiarSaludo() : void{
    this.hello ="hola monkey"
  }

  

}
