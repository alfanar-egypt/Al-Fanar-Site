import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang;
  ltrrtl;
  constructor(public translate: TranslateService, private meta: Meta) {
    this.meta.addTag({
      name: 'description',
      content:
        'Al Fanar Medical Center was established on 1996, specialized in the field of orthopedics and neurosurgery supplies. Our mission is to provide the best quality to the patients, the most reliable and professional services,'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Fanar, Orthopedics, Neurosurgery'
    });
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
    this.translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
      if (event.lang == 'ar') {
        this.ltrrtl = 'rtl';
      } else {
        this.ltrrtl = 'ltr';
      }
      document.getElementsByTagName('html')[0].setAttribute('lang', this.lang);
      document.getElementsByTagName('body')[0].setAttribute('dir', this.ltrrtl);
    });
  }
}
