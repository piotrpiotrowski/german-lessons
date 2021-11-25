import {Component} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {PresentSimpleSentenceService} from './present-simple-sentence.service';

@Component({
  selector: 'app-present-simple-sentence-complement',
  templateUrl: './present-simple-sentence-complement.component.html',
  styleUrls: ['./present-simple-sentence-complement.component.scss']
})
export class PresentSimpleSentenceComplementComponent {

  constructor(public languageService: LanguageService, public presentSimpleSentenceService: PresentSimpleSentenceService) {
  }
}
