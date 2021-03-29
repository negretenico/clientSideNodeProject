import { Component, OnInit, ViewChild } from '@angular/core';
import data from "../../../Data/companyData.json"


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  company: any;
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
