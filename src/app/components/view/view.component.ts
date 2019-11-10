import { Component, OnInit, Input } from '@angular/core';
import { Generica } from 'src/app/common/interface';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  elements : Array<Generica> = [];

constructor(private generic : ApiService) {
}

  ngOnInit() {
    // this.generic.getAllComments()
    // .subscribe(data => {
    //   this.elements = data.map(obj => {
    //     var rObj = <Generica>{
    //       name: obj['name'],
    //       email: obj['email']
    //     };
    //     return rObj;
    //   });
    //   console.log(this.elements)
    // });

    this.generic.getAllUsers()
    .subscribe(data => {
      this.elements = data.map(obj =>{
        var resp = <Generica>{
          name: obj['name'],
          email: obj['email']
        };
        return resp;
      })
    });
  }

  


}
