import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private apiKey : string = "c0a27ca09ffa6c7f295f431f68f0a7c9";
  
  constructor(private http: HttpClient) { }

  getWeather(city = "Chicago", state = "IL", country = "US") : Observable<any> {
    var url : string = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city},${state},${country}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}