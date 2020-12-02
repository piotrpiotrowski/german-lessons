import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {VerbForms} from './verb-forms-row/verb-forms.model';
import {BehaviorSubject} from 'rxjs';
import {VerbFromsService} from './verb-froms.service';
import {finalize, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-verbs-forms',
  templateUrl: './verbs-forms.component.html',
  styleUrls: ['./verbs-forms.component.scss']
})
export class VerbsFormsComponent implements OnInit, AfterViewChecked {
  command: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);
  verbs: VerbForms[];
  translationLanguage = 'EN';
  languages: string[] = ['PL', 'EN'];
  loading: boolean;

  constructor(private verbFromsService: VerbFromsService) {
  }

  ngOnInit(): void {
    this.loadVerbsForms();
  }

  ngAfterViewChecked(): void {
    this.loading = false;
  }

  loadVerbsForms(): void {
    this.loading = true;
    this.verbFromsService.find(() => true, this.translationLanguage)
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        verbs => this.verbs = verbs,
        console.error
      );
  }

  setCommandToClear(): void {
    this.command.next(InputCellCommand.CLEAR);
  }

  setCommandToCheck(): void {
    this.command.next(InputCellCommand.CHECK);
  }

  setCommandToReveal(): void {
    this.command.next(InputCellCommand.REVEAL);
  }
}
