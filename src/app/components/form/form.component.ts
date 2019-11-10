import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private builder : FormBuilder) { 
    this.register = this.builder.group({
      Nombre: [''],
      Usuario: ['',Validators.required],
      email: ['',Validators.compose([Validators.email,Validators.required])],
      clave: ['',Validators.required],
       
    })
  }

  ngOnInit() {
  }

  register : FormGroup;

  enviar(values) :void{
    console.log(values);

  }


}
