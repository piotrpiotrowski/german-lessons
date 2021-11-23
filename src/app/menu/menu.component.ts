import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../language/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, public languageService: LanguageService) {
  }

  ngOnInit(): void {
  }

  navigateToIrregularVerbs(): Promise<boolean> {
    return this.router.navigateByUrl('/irregular-verbs');
  }

  navigateToPersonalPronouns(): Promise<boolean> {
    return this.router.navigateByUrl('/personal-pronouns');
  }

  navigateToPossessivePronouns(): Promise<boolean> {
    return this.router.navigateByUrl('/possessive-pronouns');
  }

  navigateToVerbConjunctions(): Promise<boolean> {
    return this.router.navigateByUrl('/verb-conjunctions');
  }

  navigateToSentenceComplements(): Promise<boolean> {
    return this.router.navigateByUrl('/present-perfect-sentence-complement');
  }
}
