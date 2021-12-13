import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../language/language.service';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDrawerToggleResult} from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, public languageService: LanguageService) {
  }

  @Input() nav: MatSidenav;

  ngOnInit(): void {
  }

  navigateToIrregularVerbs(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/irregular-verbs');
  }

  navigateToPersonalPronouns(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/personal-pronouns');
  }

  navigateToPossessivePronouns(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/possessive-pronouns');
  }

  navigateToPresentSimpleVerbConjunctions(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/present-simple-verb-conjunctions');
  }

  navigateToPastSimpleVerbConjunctions(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/past-simple-verb-conjunctions');
  }

  navigateToPresentPerfectSentenceComplements(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/present-perfect-sentence-complement');
  }

  navigateToPastSimpleSentenceComplements(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/past-simple-sentence-complement');
  }

  navigateToPresentSimpleSentenceComplements(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/present-simple-sentence-complement');
  }

  navigateToNounSentenceComplements(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/noun-sentence-complement');
  }

  navigateToNounsForms(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/noun-forms');
  }

  navigateToPrepositionsSentenceComplements(): Promise<MatDrawerToggleResult> {
    return this.routeTo('/prepositions-sentence-complement');
  }

  private routeTo(path: string): Promise<MatDrawerToggleResult> {
    return this.router.navigateByUrl(path).then(_ => this.nav.close());
  }
}
