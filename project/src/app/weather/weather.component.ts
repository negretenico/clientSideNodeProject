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
    });
  }

  updateWeather(userInput) : void {
    var city = "Chicago";
    var state = "IL";
    var country = "US";
    var inputArr = userInput.replace(/\s/g, "").split(",", 3);

    if (inputArr != undefined && inputArr.length != 0) {
      if (inputArr[0] != '') {
        city = inputArr[0];
      }
      if (inputArr.length > 1 && inputArr[1] != '') {
        state = inputArr[1];
      }
      if (inputArr.length > 2 && inputArr[2] != '') {
        country = inputArr[2];
      }
    }

    this.weatherService.getWeather(city, state, country).subscribe( (res : any) => {
      this.data = res;
    });
  }
}
