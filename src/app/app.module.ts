import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './Demo/Login/login.component';
import { HomeComponent } from './Demo/Home/home.component';
import { RegisterComponent } from './Demo/Register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
