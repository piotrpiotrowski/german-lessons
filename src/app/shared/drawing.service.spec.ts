import {DrawingService} from './drawing.service';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {Language} from '../language/language';

describe('DrawingService', () => {

  const service = new DrawingService();

  it('should select single sentence by random book id', () => {
    // given
    const sentences = [
      new Sentence([], new Map<Language, string>(), 2, new Map<Language, string>(), new Map<Language, string>(), 'A', 1.2),
      new Sentence([], new Map<Language, string>(), 2, new Map<Language, string>(), new Map<Language, string>(), 'B', 1.2),
      new Sentence([], new Map<Language, string>(), 2, new Map<Language, string>(), new Map<Language, string>(), 'C', 1.2),
    ];

    // when
    const filteredSentences = service.filterByRandomValueOfAttribute<Sentence>(sentences, model => model.bookId);

    // then
    expect(filteredSentences.length).toEqual(1);
  });
});