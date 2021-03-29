import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    
  emailCompanyForm: any;
    
    

      constructor(private router:Router,private fb: FormBuilder) {


        this.emailCompanyForm = new FormGroup(
          {
      
            query: new FormControl('',Validators.required),
            email: new FormControl('',[Validators.required,Validators.email]),
          
          }
          
            );
        
       }
    
      ngOnInit(): void {
        
      }
    
      
      email()
      {
        this.router.navigate(['/contact','thankYou']);

      }
}
