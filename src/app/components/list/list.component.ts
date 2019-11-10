import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Empleado, Generica } from 'src/app/common/interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

//   constructor(private emplServivice : ApiService) { 
//     this.emplServivice.getAll()
//     .subscribe(data => {
//       this.empleados = data
//       console.log(this.empleados)
//     });
//   }

//   ngOnInit() {
//   }

// empleados : Array<Empleado>;

// constructor(private generic : ApiService) { 
//   this.generic.getAllComments()
//   .subscribe(data => {
//     this.elements = data
//     console.log(this.elements)
//   });
// }

@Input() elems : Array<Generica>

constructor() { 
}

ngOnInit() {
}


}
