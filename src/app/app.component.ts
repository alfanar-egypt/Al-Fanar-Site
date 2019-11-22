import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  lang;
  ltrrtl;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      if (event.lang == 'ar') {
        this.ltrrtl = 'rtl';
      }
      else {
        this.ltrrtl = 'ltr';
      }
      document.getElementsByTagName("html")[0].setAttribute('lang', this.lang);
      document.getElementsByTagName("body")[0].setAttribute('dir', this.ltrrtl);
    });
  }
}
