import {Component} from '@angular/core';
import {PastSimpleVerbsConjunctionsService} from './past-simple-verbs-conjunctions.service';
import {LanguageService} from '../language/language.service';

@Component({
  selector: 'app-present-simple-verbs-conjunctions',
  templateUrl: './past-simple-verbs-conjunctions.component.html',
  styleUrls: ['./past-simple-verbs-conjunctions.component.scss']
})
export class PastSimpleVerbsConjunctionsComponent {

  constructor(public verbsConjunctionsService: PastSimpleVerbsConjunctionsService, public languageService: LanguageService) {
  }
}
