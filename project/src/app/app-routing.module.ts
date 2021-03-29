import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatComponent } from './chat/chat.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component:ContactUsComponent}
=======
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
}

>>>>>>> chat

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
