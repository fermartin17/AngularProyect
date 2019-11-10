import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { OtherComponent } from './components/other/other.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { HttpFilesComponent } from './components/http-files/http-files.component';
import { RouterComponent } from './components/router/router.component';
import { ProfileComponent } from './components/profile/profile.component'
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { AlertModule } from 'ngx-bootstrap';
import { DataTablesModule } from 'angular-datatables';


const rutas : Routes=[
  // {
  //   path: '',
  //   pathMatch : 'full',
  //   redirectTo: 'profile'
  // },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'profile'
      },
      {
        path: 'form',
        component: FormComponent
      }
  ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    OtherComponent,
    EmployeeComponent,
    FormComponent, 
    HttpFilesComponent, RouterComponent, ProfileComponent, ListComponent, ViewComponent
  ],
  imports: [
    DataTablesModule,
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
