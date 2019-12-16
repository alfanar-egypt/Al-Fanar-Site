import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;
  faEnvelopeSquare = faEnvelopeSquare;
  faPhoneSquare = faPhoneSquare;
  constructor(public translate: TranslateService) {}

  ngOnInit() {}
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
