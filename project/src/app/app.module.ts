import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ThankyouComponent,
    AboutUsComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    HomeComponent,
    PageNotFoundComponent,
    SportsComponent,
=======
    WeatherComponent
>>>>>>> f8007f02a5594a2554376d7bfd99fcd81fdc7de6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiffs__6ZtOyAOu_xbNBbGpslvsMNR-Qg'
    })
=======
    HttpClientModule
>>>>>>> f8007f02a5594a2554376d7bfd99fcd81fdc7de6
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
