import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Empleado } from 'src/app/common/interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  constructor(
    private employeeService : ApiService
  ) { }

  ngOnInit() {
  }

  trabajador : Empleado;

  // empleados(){
  //   const employee_id = (document.querySelector('#empleado_id') as HTMLInputElement).value;
  //   this.employeeService.empleado(employee_id)
  //     .subscribe(x => {
  //       this.trabajador = x;
  //       console.log(this.trabajador);
  //     });
    
  // }
}
