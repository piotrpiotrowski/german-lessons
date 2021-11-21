import {Injectable, Predicate} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {Language} from '../language/language';
import {rawPresentPerfectSentences} from './sentence.datasource';
import {Sentence} from './sentence-row/sentence.model';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  parsedPastSentence: Observable<string[]>;

  constructor() {
    this.parsedPastSentence = of(rawPresentPerfectSentences)
      .pipe(mergeMap(csv => from(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<Sentence>): Observable<Sentence> {
    return this.parsedPastSentence
      .pipe(map(columns => new Sentence(
        columns[0],
        new Map<Language, string>([[Language.ENGLISH, columns[6]], [Language.POLISH, columns[7]], [Language.GERMAN, columns[8]]]),
        +columns[9],
        columns[2],
        new Map<Language, string>([[Language.GERMAN, columns[3]], [Language.POLISH, columns[4]], [Language.ENGLISH, columns[5]]]),
        new Map<Language, string>([[Language.GERMAN, columns[2]], [Language.POLISH, columns[11]], [Language.ENGLISH, columns[10]]]),
      )))
      .pipe(filter(predicate));
  }
}
