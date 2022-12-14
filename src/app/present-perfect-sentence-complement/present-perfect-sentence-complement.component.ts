import {Component} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {PresentPerfectSentenceService} from './present-perfect-sentence.service';

@Component({
  selector: 'app-present-perfect-sentence-complement',
  templateUrl: './present-perfect-sentence-complement.component.html',
  styleUrls: ['./present-perfect-sentence-complement.component.scss']
})
export class PresentPerfectSentenceComplementComponent {

  constructor(public languageService: LanguageService, public presentPerfectSentenceService: PresentPerfectSentenceService) {
  }
}
