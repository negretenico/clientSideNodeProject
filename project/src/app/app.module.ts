import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatComponent } from './chat/chat.component';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ThankyouComponent,
    AboutUsComponent,
    ChatComponent,
    SportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // two way binding will work
    ReactiveFormsModule, //needed for reactive forms
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5a3RiiF-Q_F70mUC-sAfM_dP7Yco0-Uk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
