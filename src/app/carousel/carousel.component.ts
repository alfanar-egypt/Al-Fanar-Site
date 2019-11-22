import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [{
    image: "../assets/images/1.jpg"
  }, {
    image: "../assets/images/2.jpg"
  }, {
    image: "../assets/images/3.jpg"
  }, {
    image: "../assets/images/4.jpg"
  }
  ];
  constructor(public translate: TranslateService) { }
  ngOnInit() {
  }
}
