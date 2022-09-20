import {Component} from '@angular/core';
import {Language} from '../language';
import {LanguageService} from '../language.service';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

  languages: string[] = Object.keys(Language);

  constructor(private languageService: LanguageService) {
  }

  selectLanguage($event: MatSelectChange): void {
    this.languageService.select($event.value);
  }
}
