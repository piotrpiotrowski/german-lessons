import {Component} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {PastSimpleSentenceService} from './past-simple-sentence.service';

@Component({
  selector: 'app-past-simple-sentence-complement',
  templateUrl: './past-simple-sentence-complement.component.html',
  styleUrls: ['./past-simple-sentence-complement.component.scss']
})
export class PastSimpleSentenceComplementComponent {

  constructor(public languageService: LanguageService, public pastSimpleSentenceService: PastSimpleSentenceService) {
  }
}
