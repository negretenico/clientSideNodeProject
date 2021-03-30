import { Component, OnInit } from '@angular/core';
import { ISport } from './sports-service/sport';
import { SportsService } from './sports-service/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  latestSport: ISport[] = [];

  constructor (private sportService: SportsService) {
      console.log('Inside Constructor');
  }

  ngOnInit(): void{
      console.log('Inside ngOnInit');

      //this.newEmployee = this.newEmployeeService.getEmployee();

      this.sportService.getSports()
          .subscribe( (res: any) => {
            console.log(res);
            this.latestSport = res;
            console.log(this.latestSport);
          });
  }
}
