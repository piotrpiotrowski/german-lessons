import {Language} from '../language/language';
import {WordDefinitionsFactory} from './word-definitions.factory';

describe('PresentSimpleSentenceService', () => {
  const csvContent = `aus;out of;z, ze środka;aus;1
außer;except for;oprócz;außer;1`;

  const service = new WordDefinitionsFactory(csvContent);

  it('should take two from list', () => {
    // when
    const wordDefinitions = service.create();

    // then
    expect(wordDefinitions.size).toEqual(2);
    expect(wordDefinitions.get('aus').infinitiveTranslations.get(Language.ENGLISH)).toEqual('out of');
    expect(wordDefinitions.get('aus').infinitiveTranslations.get(Language.POLISH)).toEqual('z, ze środka');
    expect(wordDefinitions.get('aus').infinitiveTranslations.get(Language.GERMAN)).toEqual('aus');
    expect(wordDefinitions.get('aus').value).toEqual('aus');
    expect(wordDefinitions.get('aus').classification).toEqual(1);
    expect(wordDefinitions.get('außer').infinitiveTranslations.get(Language.ENGLISH)).toEqual('except for');
    expect(wordDefinitions.get('außer').infinitiveTranslations.get(Language.POLISH)).toEqual('oprócz');
    expect(wordDefinitions.get('außer').infinitiveTranslations.get(Language.GERMAN)).toEqual('außer');
    expect(wordDefinitions.get('außer').value).toEqual('außer');
    expect(wordDefinitions.get('außer').classification).toEqual(1);
  });
});
