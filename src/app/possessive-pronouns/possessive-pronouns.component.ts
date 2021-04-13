import {Component, OnInit, Predicate} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {finalize, toArray} from 'rxjs/operators';
import {TrainingRowCommand} from '../training-row/training-row-command';
import {PossessivePronounsService} from './possessive-pronouns.service';

@Component({
  selector: 'app-possessive-pronouns',
  templateUrl: './possessive-pronouns.component.html',
  styleUrls: ['./possessive-pronouns.component.scss']
})
export class PossessivePronounsComponent implements OnInit {

  command: BehaviorSubject<string> = new BehaviorSubject<string>(InputCellCommand.CLEAR);
  pronouns: TrainingRowModel[];
  loading: boolean;
  translationLanguage = 0;
  formType = '0';

  constructor(private possessivePronounsService: PossessivePronounsService) {
  }

  ngOnInit(): void {
    this.loadPronouns();
  }

  loadPronouns(): void {
    this.loading = true;
    this.possessivePronounsService.find(this.buildSearchPredicate())
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        pronouns => this.pronouns = pronouns,
        console.error
      );
  }

  private buildSearchPredicate(): Predicate<TrainingRowModel> {
    const classification = +this.formType;
    return pronoun => classification === 0 || pronoun.classification === classification;
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

  setPolishLanguage(): void {
    this.command.next(TrainingRowCommand.CHANGE_LANGUAGE_TO_POLISH);
  }

  setEnglishLanguage(): void {
    this.command.next(TrainingRowCommand.CHANGE_LANGUAGE_TO_ENGLISH);
  }

}
