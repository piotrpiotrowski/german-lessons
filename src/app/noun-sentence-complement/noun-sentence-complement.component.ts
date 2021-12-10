import {Component} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {NounSentenceService} from './noun-sentence.service';

@Component({
  selector: 'app-present-simple-sentence-complement',
  templateUrl: './noun-sentence-complement.component.html',
  styleUrls: ['./noun-sentence-complement.component.scss']
})
export class NounSentenceComplementComponent {

  constructor(public languageService: LanguageService, public presentSimpleSentenceService: NounSentenceService) {
  }
}
