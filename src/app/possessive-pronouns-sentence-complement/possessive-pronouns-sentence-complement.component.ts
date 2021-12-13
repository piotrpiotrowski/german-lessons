import {Component} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {PossessivePronounsSentenceService} from './possessive-pronouns-sentence.service';

@Component({
  selector: 'app-possessive-pronouns-sentence-complement',
  templateUrl: './possessive-pronouns-sentence-complement.component.html',
  styleUrls: ['./possessive-pronouns-sentence-complement.component.scss']
})
export class PossessivePronounsSentenceComplementComponent {

  constructor(public languageService: LanguageService, public possessivePronounsSentenceService: PossessivePronounsSentenceService) {
  }

}
