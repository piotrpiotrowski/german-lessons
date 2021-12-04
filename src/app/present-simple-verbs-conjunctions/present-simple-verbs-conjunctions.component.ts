import {Component} from '@angular/core';
import {PresentSimpleVerbsConjunctionsService} from './present-simple-verbs-conjunctions.service';
import {LanguageService} from '../language/language.service';

@Component({
  selector: 'app-present-simple-verbs-conjunctions',
  templateUrl: './present-simple-verbs-conjunctions.component.html',
  styleUrls: ['./present-simple-verbs-conjunctions.component.scss']
})
export class PresentSimpleVerbsConjunctionsComponent {

  constructor(public verbsConjunctionsService: PresentSimpleVerbsConjunctionsService, public languageService: LanguageService) {
  }
}
