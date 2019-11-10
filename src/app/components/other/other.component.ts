import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  desactivado : boolean = false;
  titulo : string = "";
  seleccion : string;

  turnAvailable():void {
    this.desactivado = true;
  }

  log(e) : void{
    console.log(e);
  }

}
