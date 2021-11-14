import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Option} from './option.model';
import {LanguageService} from '../language/language.service';

@Component({
  selector: 'app-responsive-button-toggle-group',
  templateUrl: './responsive-button-toggle-group.component.html',
  styleUrls: ['./responsive-button-toggle-group.component.scss']
})
export class ResponsiveButtonToggleGroupComponent {

  @Input() title: string;
  @Input() options: Option[];
  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();

  @Output() selectOption = new EventEmitter<void>();

  constructor(public languageService: LanguageService) {
  }

  onChange(): void {
    this.selectOption.emit();
  }
}
