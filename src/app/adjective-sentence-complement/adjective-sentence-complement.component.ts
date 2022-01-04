import {Component} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {AdjectiveSentenceService} from './adjective-sentence.service';

@Component({
  selector: 'app-adjective-sentence-complement',
  templateUrl: './adjective-sentence-complement.component.html',
  styleUrls: ['./adjective-sentence-complement.component.scss']
})
export class AdjectiveSentenceComplementComponent {

  constructor(public languageService: LanguageService, public adjectiveSentenceService: AdjectiveSentenceService) {
  }

}
