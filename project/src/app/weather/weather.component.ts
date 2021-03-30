import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: []
})
export class WeatherComponent implements OnInit {

  data : any = {};

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe( (res : any) => {
      this.data = res;
      console.log(res);
    });
  }

}
