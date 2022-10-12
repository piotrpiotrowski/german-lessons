import {Predicate} from '@angular/core';
import {FinderService} from './finder.service';
import {from, Observable, shareReplay, switchMap} from 'rxjs';
import {map, toArray} from 'rxjs/operators';


export class MatrixFinderService<T> implements FinderService<T> {

  private readonly entities: Observable<T[]>;

  constructor(private matrix: Observable<string[][]>, private mapper: (columns: string[]) => Observable<T>) {
    this.entities = this.matrix.pipe(switchMap(from))
      .pipe(switchMap(columns => this.mapper(columns)))
      .pipe(toArray())
      .pipe(shareReplay(1));
  }

  find = (predicate: Predicate<T>): Observable<T[]> =>
    this.entities.pipe(map(list => list.filter(predicate)));
}
