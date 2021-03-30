import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '../Interfaces/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  linkAPI : string = "http://localhost:3004"
  newsURL : string = this.linkAPI + "/api/news"

  constructor(private http: HttpClient) { }

  getNews(): Observable<INews>{
    return this.http.get<INews>(this.newsURL)
  }
}
