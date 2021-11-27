import {SentencePartsMapper} from './sentence-parts.mapper';

describe('Sentence', () => {

  const sentencePartsMapper = new SentencePartsMapper();

  it('should extract prefix', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen.';
    const hiddenWord = 'gebacken';

    // when
    const sentenceParts = sentencePartsMapper.map(hiddenWord, text);

    // then
    expect(sentenceParts[0].value).toEqual('Ich habe die Kuchen ');
  });

  it('should extract empty prefix when a hidden verb starts the sentence', () => {
    // given
    const text = 'gebacken haben wir.';
    const hiddenWord = 'gebacken';

    // when
    const sentenceParts = sentencePartsMapper.map(hiddenWord, text);

    // then
    expect(sentenceParts[0].value).toEqual('');
  });

  it('should extract suffix', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen.';
    const hiddenWord = 'gebacken';

    // when
    const sentenceParts = sentencePartsMapper.map(hiddenWord, text);

    // then
    expect(sentenceParts[2].value).toEqual(' and gegessen.');
  });
});
