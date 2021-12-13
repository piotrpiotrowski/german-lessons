import {SentencePartsMapper} from './sentence-parts.mapper';
import {SentencePartType} from '../sentence-complement/sentence-row/sentence-part-type.enum';
import {WordIndex} from './word-index.model';

describe('Sentence', () => {

  const sentencePartsMapper = new SentencePartsMapper();

  it('should extract prefix', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen.';
    const hiddenWord = new WordIndex('gebacken', 20);

    // when
    const sentenceParts = sentencePartsMapper.map([hiddenWord], text);

    // then
    expect(sentenceParts[0].value).toEqual('Ich habe die Kuchen ');
  });

  it('should skip empty prefix when a hidden verb starts the sentence', () => {
    // given
    const text = 'gebacken haben wir.';
    const hiddenWord = new WordIndex('gebacken', 0);

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
    const hiddenWord = new WordIndex('gebacken', 20);

    // when
    const sentenceParts = sentencePartsMapper.map([hiddenWord], text);

    // then
    expect(sentenceParts[2].value).toEqual(' and gegessen.');
  });

  it('should skip empty suffix when a hidden verb ends the sentence', () => {
    // given
    const text = 'Ich habe die Kuchen gebacken and gegessen';
    const hiddenWord = new WordIndex('gegessen', 33);

    // when
    const sentenceParts = sentencePartsMapper.map([hiddenWord], text);

    // then
    expect(sentenceParts.length).toEqual(2);
    expect(sentenceParts[0].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[0].value).toEqual('Ich habe die Kuchen gebacken and ');
    expect(sentenceParts[1].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[1].value).toEqual('gegessen');
  });

  it('should parse sentence with many hidden words', () => {
    // given
    const text = 'Wie immer setzte er sich auf seinen Platz an der Wand. Jonatan saßen ihm gegenüber und Abner saß neben Saul . Davids Platz aber blieb leer stand';

    // when
    const sentenceParts = sentencePartsMapper.map([new WordIndex('Wand', 49), new WordIndex('saßen', 63), new WordIndex('saß', 93), new WordIndex('blieb', 128), new WordIndex('stand', 139)], text);

    // then
    expect(sentenceParts.length).toEqual(10);
    expect(sentenceParts[0].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[0].value).toEqual('Wie immer setzte er sich auf seinen Platz an der ');
    expect(sentenceParts[1].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[1].value).toEqual('Wand');
    expect(sentenceParts[2].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[2].value).toEqual('. Jonatan ');
    expect(sentenceParts[3].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[3].value).toEqual('saßen');
    expect(sentenceParts[4].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[4].value).toEqual(' ihm gegenüber und Abner ');
    expect(sentenceParts[5].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[5].value).toEqual('saß');
    expect(sentenceParts[6].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[6].value).toEqual(' neben Saul . Davids Platz aber ');
    expect(sentenceParts[7].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[7].value).toEqual('blieb');
    expect(sentenceParts[8].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[8].value).toEqual(' leer ');
    expect(sentenceParts[9].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[9].value).toEqual('stand');
  });

  it('should parse a hidden word standing directly after a different hidden word', () => {
    // given
    const text = 'Elija entgegnete: Diese Bitte ist schwer zu erfüllen. Doch wenn du siehst, wie ich von dir weggenommen werde, wirst du die beiden Anteile bekommen. Siehst du das nicht, bekommst du sie nicht.';

    // when
    const sentenceParts = sentencePartsMapper.map([new WordIndex('Bitte', 24),
      new WordIndex('ist', 30),
      new WordIndex('siehst', 67),
      new WordIndex('werde', 103),
      new WordIndex('wirst', 110),
      new WordIndex('Siehst', 148)], text);

    // then
    expect(sentenceParts.length).toEqual(13);
    expect(sentenceParts[0].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[0].value).toEqual('Elija entgegnete: Diese ');
    expect(sentenceParts[1].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[1].value).toEqual('Bitte');
    expect(sentenceParts[2].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[2].value).toEqual(' ');
    expect(sentenceParts[3].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[3].value).toEqual('ist');
    expect(sentenceParts[4].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[4].value).toEqual(' schwer zu erfüllen. Doch wenn du ');
    expect(sentenceParts[5].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[5].value).toEqual('siehst');
    expect(sentenceParts[6].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[6].value).toEqual(', wie ich von dir weggenommen ');
    expect(sentenceParts[7].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[7].value).toEqual('werde');
    expect(sentenceParts[8].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[8].value).toEqual(', ');
    expect(sentenceParts[9].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[9].value).toEqual('wirst');
    expect(sentenceParts[10].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[10].value).toEqual(' du die beiden Anteile bekommen. ');
    expect(sentenceParts[11].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[11].value).toEqual('Siehst');
    expect(sentenceParts[12].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[12].value).toEqual(' du das nicht, bekommst du sie nicht.');
  });

  it('should parse a sentence with hiddens words only', () => {
    // given
    const text = 'Bitte ist siehst werde wirst Siehst.';

    // when
    const sentenceParts = sentencePartsMapper.map([new WordIndex('Bitte', 0), new WordIndex('ist', 6),
      new WordIndex('siehst', 10), new WordIndex('werde', 17), new WordIndex('wirst', 23),
      new WordIndex('Siehst', 29)], text);

    // then
    expect(sentenceParts.length).toEqual(12);
    expect(sentenceParts[0].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[0].value).toEqual('Bitte');
    expect(sentenceParts[1].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[1].value).toEqual(' ');
    expect(sentenceParts[2].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[2].value).toEqual('ist');
    expect(sentenceParts[3].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[3].value).toEqual(' ');
    expect(sentenceParts[4].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[4].value).toEqual('siehst');
    expect(sentenceParts[5].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[5].value).toEqual(' ');
    expect(sentenceParts[6].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[6].value).toEqual('werde');
    expect(sentenceParts[7].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[7].value).toEqual(' ');
    expect(sentenceParts[8].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[8].value).toEqual('wirst');
    expect(sentenceParts[9].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[9].value).toEqual(' ');
    expect(sentenceParts[10].type).toEqual(SentencePartType.RIDDLE);
    expect(sentenceParts[10].value).toEqual('Siehst');
    expect(sentenceParts[11].type).toEqual(SentencePartType.TEXT);
    expect(sentenceParts[11].value).toEqual('.');
  });
});
