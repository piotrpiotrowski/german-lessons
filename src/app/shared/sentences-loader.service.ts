import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentencesLoaderService {

  private readonly sentences: Observable<string>;

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/csv; charset=utf-8'
    );
    this.sentences = this.http
      .get('/api/sentences.csv', {headers, responseType: 'text'})
      .pipe(shareReplay(1));
  }

  load = () => this.sentences;
}
