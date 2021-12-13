import {WordsIndexesExtractorService} from './words-indexes-extractor.service';
import {WordIndex} from './word-index.model';

describe('WordsIndexesExtractorService', () => {

  const service = new WordsIndexesExtractorService();

  it('should ', () => {
    // given
    const text = 'der, Hund';

    // when
    const words = service.extract(text);

    // then
    expect(words).toEqual([
      new WordIndex('der', 0),
      new WordIndex('Hund', 5)
    ]);
  });

  it('should extract all words 1', () => {
    // given
    const text = 'Niemand darf ihn mit der Hand berühren! Sonst wird er mit Steinen oder Pfeilen getötet. Das gilt für Mensch und Tier. Erst wenn das Widderhorn geblasen wird, dürfen sie auf den Berg steigen.';

    // when
    const words = service.extract(text);

    // then
    expect(words).toEqual([
      new WordIndex('Niemand', 0),
      new WordIndex('darf', 8),
      new WordIndex('ihn', 13),
      new WordIndex('mit', 17),
      new WordIndex('der Hand', 21),
      new WordIndex('berühren', 30),
      new WordIndex('Sonst', 40),
      new WordIndex('wird', 46),
      new WordIndex('er', 51),
      new WordIndex('mit', 54),
      new WordIndex('Steinen', 58),
      new WordIndex('oder', 66),
      new WordIndex('Pfeilen', 71),
      new WordIndex('getötet', 79),
      new WordIndex('Das gilt', 88),
      new WordIndex('für', 97),
      new WordIndex('Mensch', 101),
      new WordIndex('und', 108),
      new WordIndex('Tier', 112),
      new WordIndex('Erst', 118),
      new WordIndex('wenn', 123),
      new WordIndex('das Widderhorn', 128),
      new WordIndex('geblasen', 143),
      new WordIndex('wird', 152),
      new WordIndex('dürfen', 158),
      new WordIndex('sie', 165),
      new WordIndex('auf', 169),
      new WordIndex('den Berg', 173),
      new WordIndex('steigen', 182)
    ]);
  });

  it('should extract all words 2', () => {
    // given
    const text = 'Beim siebten Mal meldete der Diener: Da ist eine Wolke, klein wie die Hand eines Mannes. Die steigt gerade aus dem Meer auf. Darauf sagte Elija: Geh zu Ahab und richte ihm aus: Spann den Wagen an und fahr los, sonst hält dich der Regen noch auf!';

    // when
    const words = service.extract(text);

    // then
    expect(words).toEqual([
      new WordIndex('Beim', 0),
      new WordIndex('siebten', 5),
      new WordIndex('Mal', 13),
      new WordIndex('meldete', 17),
      new WordIndex('der Diener', 25),
      new WordIndex('Da', 37),
      new WordIndex('ist', 40),
      new WordIndex('eine Wolke', 44),
      new WordIndex('klein', 56),
      new WordIndex('wie', 62),
      new WordIndex('die Hand', 66),
      new WordIndex('eines Mannes', 75),
      new WordIndex('Die steigt', 89),
      new WordIndex('gerade', 100),
      new WordIndex('aus', 107),
      new WordIndex('dem Meer', 111),
      new WordIndex('auf', 120),
      new WordIndex('Darauf', 125),
      new WordIndex('sagte', 132),
      new WordIndex('Elija', 138),
      new WordIndex('Geh', 145),
      new WordIndex('zu', 149),
      new WordIndex('Ahab', 152),
      new WordIndex('und', 157),
      new WordIndex('richte', 161),
      new WordIndex('ihm', 168),
      new WordIndex('aus', 172),
      new WordIndex('Spann', 177),
      new WordIndex('den Wagen', 183),
      new WordIndex('an', 193),
      new WordIndex('und', 196),
      new WordIndex('fahr', 200),
      new WordIndex('los', 205),
      new WordIndex('sonst', 210),
      new WordIndex('hält', 216),
      new WordIndex('dich', 221),
      new WordIndex('der Regen', 226),
      new WordIndex('noch', 236),
      new WordIndex('auf', 241)
    ]);
  });
});
