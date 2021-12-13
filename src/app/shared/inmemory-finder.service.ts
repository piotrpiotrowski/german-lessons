import {Predicate} from '@angular/core';
import {FinderService} from './finder.service';


export class InmemoryFinderService<T> implements FinderService<T> {

  rows: T[];

  constructor(matrix: string[][], private mapper: (columns: string[]) => T) {
    this.rows = matrix.map(columns => this.mapper(columns))
      .filter(value => value !== null);
  }

  find(predicate: Predicate<T>): T[] {
    return this.rows.filter(predicate);
  }
}
