import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { SportsComponent } from './sports/sports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ThankyouComponent,
    AboutUsComponent,
    HomeComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    SportsComponent,
    PageNotFoundComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiffs__6ZtOyAOu_xbNBbGpslvsMNR-Qg'
    }), 
      NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
