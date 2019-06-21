import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './Demo/Login/login.component';
import { RegisterComponent } from './Demo/Register/register.component';
import { HomeComponent } from './Demo/Home/home.component';

const routes: Routes = [
 
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent, 
                                 EmployeeListComponent, 
                                 PageNotFoundComponent, 
                                 HomeComponent, 
                                 LoginComponent, 
                                 RegisterComponent]
