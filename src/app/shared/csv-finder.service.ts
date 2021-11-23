import {Predicate} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {FinderService} from './finder.service';


export class CsvFinderService<T> implements FinderService<T> {

  rows: Observable<string[]>;

  constructor(lines: string, private mapper: (columns: string[]) => T) {
    this.rows = of(lines)
      .pipe(mergeMap(csv => from(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<T>): Observable<T> {
    return this.rows
      .pipe(map(columns => this.mapper(columns)))
      .pipe(filter(predicate));
  }
}
