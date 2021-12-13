import {Predicate} from '@angular/core';

export interface FinderService<T> {

  find(predicate: Predicate<T>): T[];
}
