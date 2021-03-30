import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor( private http: HttpClient ) { }

  getSports(): Observable<any>{
    console.log('INSIDE getSports');

    return this.http.get("http://localhost:3000/api/sports")
      .pipe( map((res: any)=>{

        return res;
      }));
  }
}
