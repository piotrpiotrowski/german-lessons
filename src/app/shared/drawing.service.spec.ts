import {DrawingService} from './drawing.service';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {Language} from '../language/language';
import {TrainingRowModel} from '../training-row/training-row.model';

describe('DrawingService', () => {


  it('should select single sentence by random book id', () => {
    // given
    const service = new DrawingService();

    // and
    const sentences = [
      new Sentence([], new Map<Language, string>(), 2, new Map<Language, string>(), new Map<Language, string>(), 'A', 1, 2),
      new Sentence([], new Map<Language, string>(), 2, new Map<Language, string>(), new Map<Language, string>(), 'B', 1, 2),
      new Sentence([], new Map<Language, string>(), 2, new Map<Language, string>(), new Map<Language, string>(), 'C', 1, 2),
    ];

    // when
    const filteredSentences = service.filterByRandomValueOfAttribute<Sentence>(sentences, model => model.bookId);

    // then
    expect(filteredSentences.length).toEqual(1);
  });

  it('should select 5 training rows when only 5 available', () => {
    // given
    const service = new DrawingService();

    // and
    const rows = [
      new TrainingRowModel(new Map([]), 1, []),
      new TrainingRowModel(new Map([]), 2, []),
      new TrainingRowModel(new Map([]), 3, []),
      new TrainingRowModel(new Map([]), 4, []),
      new TrainingRowModel(new Map([]), 5, [])
    ];

    // when
    const filteredSentences = service.filterBySmallestWeight<TrainingRowModel>(rows, model => model.classification / 10);

    // then
    expect(filteredSentences.length).toEqual(5);
    expect(filteredSentences[0].classification).toEqual(1);
    expect(filteredSentences[1].classification).toEqual(2);
    expect(filteredSentences[2].classification).toEqual(3);
    expect(filteredSentences[3].classification).toEqual(4);
    expect(filteredSentences[4].classification).toEqual(5);
  });

  it('should select 5 training rows with smallest weight', () => {
    // given
    const service = new DrawingService();

    // and
    const rows = [
      new TrainingRowModel(new Map([]), 1, []),
      new TrainingRowModel(new Map([]), 2, []),
      new TrainingRowModel(new Map([]), 3, []),
      new TrainingRowModel(new Map([]), 4, []),
      new TrainingRowModel(new Map([]), 5, []),
      new TrainingRowModel(new Map([]), 6, []),
    ];

    // when
    const filteredSentences = service.filterBySmallestWeight<TrainingRowModel>(rows, model => model.classification / 10);

    // then
    expect(filteredSentences.length).toEqual(5);
    expect(filteredSentences[0].classification).toEqual(1);
    expect(filteredSentences[1].classification).toEqual(2);
    expect(filteredSentences[2].classification).toEqual(3);
    expect(filteredSentences[3].classification).toEqual(4);
    expect(filteredSentences[4].classification).toEqual(5);
  });

  it('should be deterministic', () => {
    // given
    const service = new DrawingService();

    // and
    const rows = [
      new TrainingRowModel(new Map([]), 1, []),
      new TrainingRowModel(new Map([]), 2, []),
      new TrainingRowModel(new Map([]), 3, []),
      new TrainingRowModel(new Map([]), 4, []),
      new TrainingRowModel(new Map([]), 5, []),
      new TrainingRowModel(new Map([]), 6, []),
    ];

    // when
    const filteredSentences1 = service.filterBySmallestWeight<TrainingRowModel>(rows, model => model.classification / 10);
    const filteredSentences2 = service.filterBySmallestWeight<TrainingRowModel>(rows, model => model.classification / 10);

    // then
    expect(filteredSentences1).toEqual(filteredSentences2);
  });
});
