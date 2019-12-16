import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
oggi = new Date();
year = this.oggi.getFullYear()
  constructor() {}

  ngOnInit() {}
}
