import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [{
    image: "../assets/images/log.png"
  }, {
    image: "./assets/images/log.png"
  }, {
    image: "../assets/images/log.png"
  }, {
    image: "../assets/images/log.png"
  }
  ];
  constructor(public translate: TranslateService) { }
  ngOnInit() {
  }
}
