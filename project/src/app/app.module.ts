import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // two way binding will work
    ReactiveFormsModule, //needed for reactive forms
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
