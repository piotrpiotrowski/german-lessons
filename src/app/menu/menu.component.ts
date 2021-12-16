import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../language/language.service';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDrawerToggleResult} from '@angular/material/sidenav/drawer';
import {routes} from '../app-routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  paths: string[];

  constructor(private router: Router, public languageService: LanguageService) {
    this.paths = routes.slice(1).map(route => route.path);
  }

  @Input() nav: MatSidenav;

  public routeTo(path: string): Promise<MatDrawerToggleResult> {
    return this.router.navigateByUrl(path).then(_ => this.nav.close());
  }

  public buildTranslationKey(path: string): string {
    return path.replace(/-/g, '') + 'MenuItem';
  }
}
