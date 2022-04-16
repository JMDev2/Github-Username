import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    DetailsComponent,
    // HttpClientModule
    // FormsModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
