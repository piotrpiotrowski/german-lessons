import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {from, Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {Language} from '../language/language';
import {rawVerbsForms} from './verbs.datasource';

@Injectable({
  providedIn: 'root'
})
export class VerbsFormsService {

  parsedVerbsForms: Observable<string[]>;

  constructor() {
    this.parsedVerbsForms = of(rawVerbsForms)
      .pipe(mergeMap(csv => from(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<TrainingRowModel>): Observable<TrainingRowModel> {
    return this.parsedVerbsForms
      .pipe(map(columns => new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[2]]]),
        +columns[6],
        [
          new Answer('infinitive', columns[2]),
          new Answer('presentSimple', columns[3]),
          new Answer('pastSimple', columns[4]),
          new Answer('pastParticiple', columns[5])
        ])))
      .pipe(filter(predicate));
  }
}
