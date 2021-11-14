import {Component} from '@angular/core';
import {Language} from './language/language';
import {LanguageService} from './language/language.service';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'German lessons';
  languages: string[] = Object.keys(Language);

  constructor(private languageService: LanguageService) {
  }

  selectLanguage($event: MatSelectChange): void {
    this.languageService.selectLanguage($event.value);
  }
}
