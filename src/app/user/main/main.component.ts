import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';//i18n

@Component({
  selector: 'app-user',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class UserMainComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }
  ngOnInit() {
    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

}
