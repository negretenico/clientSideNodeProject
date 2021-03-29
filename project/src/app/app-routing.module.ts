import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatComponent } from './chat/chat.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {
  path: 'contact',children:
  [
    {path: '',component: ContactUsComponent},
    {path: 'thankYou',component: ThankyouComponent},

   ]
},
{
  path: 'about' , component: AboutUsComponent
},
{
  path: 'chat', component: ChatComponent
},
{
  path: 'sports', component: SportsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
