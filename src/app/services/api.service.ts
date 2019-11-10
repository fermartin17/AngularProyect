import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Empleado, Generica } from '../common/interface';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url : string ='https://jsonplaceholder.typicode.com';

  // api_url : string = 'http://dummy.restapiexample.com/api/v1'

  // empleado(id : string) : Observable<Empleado>{ 
  //   var result = this._http.get<Empleado>(`${this.api_url}/employee/` + id);
  //   return result;
  // }

  // getAll() : Observable<Array<Empleado>>{
  //   var result = this._http.get<Array<Empleado>>(`${this.api_url}/employees`);
  //   return result;
  // }

  getAllUsers() : Observable<any>{
    return this._http.get(`${this.api_url}/users`);
  }

  getAllComments(): Observable<any>{
    return this._http.get(`${this.api_url}/comments`);
  }
    
}
