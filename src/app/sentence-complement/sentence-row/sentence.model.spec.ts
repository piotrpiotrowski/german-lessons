import {Sentence} from './sentence.model';
import {Language} from '../../language/language';

describe('Sentence', () => {

  it('should extract prefix', () => {
    // when
    const sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'backen']]), 2, 'Ich habe die Kuchen gebacken and gegessen.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>());

    // then
    expect(sentence.prefix).toEqual('Ich habe die Kuchen ');
  });

  it('should extract empty prefix when a hidden verb starts the sentence', () => {
    // when
    const sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'backen']]), 2, 'gegessen haben wir.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>());

    // then
    expect(sentence.prefix).toEqual('');
  });

  it('should extract suffix', () => {
    // when
    const sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'backen']]), 2, 'Ich habe die Kuchen gebacken and gegessen.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>());

    // then
    expect(sentence.suffix).toEqual(' and gegessen.');
  });
});
