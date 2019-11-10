import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-files',
  templateUrl: './http-files.component.html',
  styleUrls: ['./http-files.component.css']
})
export class HttpFilesComponent implements OnInit {

  constructor(
    private httpService: HttpClient
  ) { 
    let form = new FormData();
    form.append('archivo','texto')
    this.httpService.post('https://jsonplaceholder.typicode.com/users',form)
    .subscribe(data => {
      var resp = data
      console.log(resp)
    })
  }

  ngOnInit() {
  }

}
