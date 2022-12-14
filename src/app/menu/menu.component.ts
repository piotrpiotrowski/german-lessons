import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../language/language.service';
import {MatSidenav} from '@angular/material/sidenav';
import {routes} from '../app-routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  paths: string[];

  constructor(private router: Router, public languageService: LanguageService) {
    this.paths = routes.slice(1).map(route => route.path as string);
  }

  @Input() nav!: MatSidenav;

  public routeTo(path: string): any {
    return this.router.navigateByUrl(path).then(() => this.nav.close());
  }

  public buildTranslationKey(path: string): string {
    return path.replace(/-/g, '') + 'MenuItem';
  }

  isSelected = (path: string) => document.URL.includes(path);
}
