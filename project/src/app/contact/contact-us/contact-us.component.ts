import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  emailForm = new FormGroup(
    {

      query: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
    
    }
    
      );
    
    
    
    
      constructor(private router:Router) { }
    
      ngOnInit(): void {
      }
    
      
      email()
      {
        this.router.navigate(['/contact','thankYou']);

      }
}
