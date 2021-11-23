import {Predicate} from '@angular/core';
import {Observable} from 'rxjs';

export interface FinderService<T> {

  find(predicate: Predicate<T>): Observable<T>;
}
