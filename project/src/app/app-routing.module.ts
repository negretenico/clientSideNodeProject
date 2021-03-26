import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';

const routes: Routes = [
  {
  path: 'contact',children:
  [
    {path: '',component: ContactUsComponent},
    {path: 'thankYou',component: ThankyouComponent},

   ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
