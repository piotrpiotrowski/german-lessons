import {AdjectiveMultiplierService} from './adjective-multiplier.service';
import {WordDefinition} from '../shared/word-definition.model';
import {Language} from '../language/language';

describe('AdjectiveMultiplierService', () => {

  const service = new AdjectiveMultiplierService();


  it('should add endings without e when adjectives ends on e', () => {
    // given
    const wordDefinition = new WordDefinition('gerade', new Map<Language, string>([[Language.ENGLISH, 'straight'], [Language.POLISH, 'właśnie'], [Language.GERMAN, 'gerade']]), 1);

    // when
    const wordDefinitions = service.multiply(wordDefinition);

    // then
    expect(wordDefinitions.length).toEqual(5);
    expect(wordDefinitions[0].value).toEqual('gerade');
    expect(wordDefinitions[0].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[0].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[1].value).toEqual('geradem');
    expect(wordDefinitions[1].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[1].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[2].value).toEqual('geraden');
    expect(wordDefinitions[2].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[2].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[3].value).toEqual('gerader');
    expect(wordDefinitions[3].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[3].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[4].value).toEqual('gerades');
    expect(wordDefinitions[4].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[4].classification).toEqual(wordDefinition.classification);
  });

  it('should add endings with e when adjectives not ends on e', () => {
    // given
    const wordDefinition = new WordDefinition('kurz', new Map<Language, string>([[Language.ENGLISH, 'short'], [Language.POLISH, 'krótki'], [Language.GERMAN, 'kurz']]), 1);

    // when
    const wordDefinitions = service.multiply(wordDefinition);

    // then
    expect(wordDefinitions.length).toEqual(6);
    expect(wordDefinitions[0].value).toEqual('kurz');
    expect(wordDefinitions[0].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[0].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[1].value).toEqual('kurze');
    expect(wordDefinitions[1].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[1].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[2].value).toEqual('kurzem');
    expect(wordDefinitions[2].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[2].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[3].value).toEqual('kurzen');
    expect(wordDefinitions[3].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[3].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[4].value).toEqual('kurzer');
    expect(wordDefinitions[4].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[4].classification).toEqual(wordDefinition.classification);
    expect(wordDefinitions[5].value).toEqual('kurzes');
    expect(wordDefinitions[5].infinitiveTranslations).toEqual(wordDefinition.infinitiveTranslations);
    expect(wordDefinitions[5].classification).toEqual(wordDefinition.classification);
  });

});
