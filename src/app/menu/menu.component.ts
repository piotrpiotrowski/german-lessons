import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {
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
}
