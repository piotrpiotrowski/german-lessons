import {Component} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {PrepositionsSentenceService} from './prepositions-sentence.service';

@Component({
  selector: 'app-prepositions-sentence-complement',
  templateUrl: './prepositions-sentence-complement.component.html',
  styleUrls: ['./prepositions-sentence-complement.component.scss']
})
export class PrepositionsSentenceComplementComponent {

  constructor(public languageService: LanguageService, public prepositionsSentenceService: PrepositionsSentenceService) {
  }

}
