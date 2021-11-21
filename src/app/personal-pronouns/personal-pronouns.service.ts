import {Injectable} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {from, Observable, of} from 'rxjs';
import {map, mergeMap, shareReplay} from 'rxjs/operators';
import {Language} from '../language/language';
import {rawPersonalPronouns} from './personal-pronouns.datasource';

@Injectable({
  providedIn: 'root'
})
export class PersonalPronounsService {

  parsedPronouns: Observable<string[]>;

  constructor() {
    this.parsedPronouns = of(rawPersonalPronouns)
      .pipe(mergeMap(csv => from(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(): Observable<TrainingRowModel> {
    return this.parsedPronouns
      .pipe(map(columns => new TrainingRowModel(
        new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[2]]]),
        +columns[6],
        [
          new Answer('nominative', columns[2]),
          new Answer('genitive', columns[3]),
          new Answer('accusative', columns[4]),
          new Answer('dative', columns[5])
        ])));
  }
}
