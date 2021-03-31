import { Component, OnInit } from '@angular/core';
import * as data from "../../../Data/companyData.json"


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  company: any;
  names: String[] = ['Nicholas Negrete', 'Leonardo Espinoza', 'Mit Patel', 'Najurl Islam', 'Hemanth Ravigowda']
  constructor() { 
    this.company = data.company;
    console.log(this.company);

  
  }

  ngOnInit(): void {
  }

  doNothing()
  {

  }
}
