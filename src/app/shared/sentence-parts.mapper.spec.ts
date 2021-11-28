import {SentencePartsMapper} from './sentence-parts.mapper';
import {SentencePartType} from '../sentence-complement/sentence-row/sentence-part-type.enum';

describe('Sentence', () => {

  const sentencePartsMapper = new SentencePartsMapper();

  it('should extract prefix', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen.';
    const hiddenWord = 'gebacken';

    // when
    const sentenceParts = sentencePartsMapper.map([hiddenWord], text);

    // then
    expect(sentenceParts[0].value).toEqual('Ich habe die Kuchen ');
  });

  it('should skip empty prefix when a hidden verb starts the sentence', () => {
    // given
    const text = 'gebacken haben wir.';
    const hiddenWord = 'gebacken';

    // when
    const sentenceParts = sentencePartsMapper.map([hiddenWord], text);

    // then
    expect(sentenceParts.length).toEqual(2);
    expect(sentenceParts[0].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[0].value).toEqual('gebacken');
    expect(sentenceParts[1].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[1].value).toEqual(' haben wir.');
  });

  it('should extract suffix', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen.';
    const hiddenWord = 'gebacken';

    // when
    const sentenceParts = sentencePartsMapper.map([hiddenWord], text);

    // then
    expect(sentenceParts[2].value).toEqual(' and gegessen.');
  });

  it('should skip empty suffix when a hidden verb ends the sentence', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen';
    const hiddenWord = 'gegessen';

    // when
    const sentenceParts = sentencePartsMapper.map([hiddenWord], text);

    // then
    expect(sentenceParts.length).toEqual(2);
    expect(sentenceParts[0].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[0].value).toEqual('Ich habe die Kuchen gebacken and ');
    expect(sentenceParts[1].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[1].value).toEqual('gegessen');
  });

  it('should extract sentence parts', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen. Alles war lecker.';

    // when
    const sentenceParts = sentencePartsMapper.map(['gebacken', 'gegessen'], text);

    // then
    expect(sentenceParts.length).toEqual(5);
    expect(sentenceParts[0].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[0].value).toEqual('Ich habe die Kuchen ');
    expect(sentenceParts[1].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[1].value).toEqual('gebacken');
    expect(sentenceParts[2].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[2].value).toEqual(' and ');
    expect(sentenceParts[3].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[3].value).toEqual('gegessen');
    expect(sentenceParts[4].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[4].value).toEqual('. Alles war lecker.');
  });
});
