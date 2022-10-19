import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocabularyLoaderService {

  private readonly vocabulary: Observable<string>;

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/csv; charset=utf-8'
    );
    this.vocabulary = this.http
      .get('/api/vocabulary.csv', {headers, responseType: 'text'})
      .pipe(shareReplay(1));
  }

  load = () => this.vocabulary;
}
