import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, NEVER, Observable} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {finalize} from 'rxjs/operators';
import {PersonalPronounsService} from './personal-pronouns.service';
import {LanguageService} from '../language/language.service';

@Component({
  selector: 'app-personal-pronouns',
  templateUrl: './personal-pronouns.component.html',
  styleUrls: ['./personal-pronouns.component.scss']
})
export class PersonalPronounsComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
  pronouns: Observable<TrainingRowModel[]> = NEVER;
  loading: boolean = false;

  constructor(private personalPronounsService: PersonalPronounsService, public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.loadPronouns();
  }

  loadPronouns(): void {
    this.loading = true;
    this.pronouns = this.personalPronounsService.find(() => true)
      .pipe(finalize(() => this.loading = false));
  }

  onCommandSelect(selectedCommand: InputCellCommand): void {
    this.command.next(selectedCommand);
  }
}
