import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private translateService: TranslateService) {
	  this.translateService.addLangs(['FR', 'EN', 'CH']);
	  this.translateService.setDefaultLang(localStorage.getItem('langue') || 'FR');
  }
}
