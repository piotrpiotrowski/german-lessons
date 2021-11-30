import {Injectable} from '@angular/core';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {Language} from '../language/language';
import {SentencePartsMapper} from './sentence-parts.mapper';

@Injectable({
  providedIn: 'root'
})
export class SentenceMapper {

  constructor(private sentencePartsMapper: SentencePartsMapper) {
  }

  public map = (columns: string[]) =>
    new Sentence(
      this.sentencePartsMapper.map(columns[0].split(' | '), columns[2]),
      new Map<Language, string>([[Language.ENGLISH, columns[6]], [Language.POLISH, columns[7]], [Language.GERMAN, columns[8]]]),
      +columns[9],
      new Map<Language, string>([[Language.GERMAN, columns[3]], [Language.POLISH, columns[4]], [Language.ENGLISH, columns[5]]]),
      new Map<Language, string>([[Language.GERMAN, columns[2]], [Language.POLISH, columns[11]], [Language.ENGLISH, columns[10]]]),
      columns[1].substring(0, 3),
      parseFloat(columns[1].substring(4))
    )
}
