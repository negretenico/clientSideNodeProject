import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images:any[] = [];
  constructor(private serv: NewsService, private router : Router, config: NgbCarouselConfig) { 
    // config.interval = 5000
    config.pauseOnHover = false
  }

  dataEvent: string = ""
  imgIndex : number = 0

  ngOnInit(): void {
    // this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    this.serv.getNews()
      .subscribe((res : any) => {
        console.log(res)
        this.images = res;
      })
  }

  onSlide(event : any) {
    this.dataEvent = JSON.stringify(event);
    console.log(event);
    const imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    console.log("image index", imageIndex);
    this.imgIndex = imageIndex
  }

}