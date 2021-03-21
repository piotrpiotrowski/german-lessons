import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {finalize, toArray} from 'rxjs/operators';
import {TrainingRowCommand} from '../training-row/training-row-command';
import {PersonalPronounsService} from './personal-pronouns.service';

@Component({
  selector: 'app-personal-pronouns',
  templateUrl: './personal-pronouns.component.html',
  styleUrls: ['./personal-pronouns.component.scss']
})
export class PersonalPronounsComponent implements OnInit {

  command: BehaviorSubject<string> = new BehaviorSubject<string>(InputCellCommand.CLEAR);
  pronouns: TrainingRowModel[];
  loading: boolean;
  translationLanguage = 0;

  constructor(private personalPronounsService: PersonalPronounsService) {
  }

  ngOnInit(): void {
    this.loadPronouns();
  }

  loadPronouns(): void {
    this.loading = true;
    this.personalPronounsService.find()
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        pronouns => this.pronouns = pronouns,
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

  setPolishLanguage(): void {
    this.command.next(TrainingRowCommand.CHANGE_LANGUAGE_TO_POLISH);
  }

  setEnglishLanguage(): void {
    this.command.next(TrainingRowCommand.CHANGE_LANGUAGE_TO_ENGLISH);
  }

}
