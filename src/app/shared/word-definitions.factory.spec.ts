import {Language} from '../language/language';
import {WordDefinitionsFactory} from './word-definitions.factory';
import {WordDefinition} from './word-definition.model';

describe('WordDefinitionsFactory', () => {
  const csvContent = `aus;out of;z, ze środka;aus;1
außer;except for;oprócz;außer;1`;

  it('should create word definitions map', () => {
    // given
    const service = new WordDefinitionsFactory(csvContent);

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

  it('should multiply', () => {
    // given
    const multiplier = wordDefinition => [
      new WordDefinition(wordDefinition.value, wordDefinition.infinitiveTranslations, wordDefinition.classification),
      new WordDefinition(wordDefinition.value + 'en', wordDefinition.infinitiveTranslations, wordDefinition.classification),
    ];
    const service = new WordDefinitionsFactory(csvContent, multiplier);

    // when
    const wordDefinitions = service.create();

    // then
    expect(wordDefinitions.size).toEqual(4);
    expect(wordDefinitions.get('aus').infinitiveTranslations.get(Language.ENGLISH)).toEqual('out of');
    expect(wordDefinitions.get('aus').infinitiveTranslations.get(Language.POLISH)).toEqual('z, ze środka');
    expect(wordDefinitions.get('aus').infinitiveTranslations.get(Language.GERMAN)).toEqual('aus');
    expect(wordDefinitions.get('aus').value).toEqual('aus');
    expect(wordDefinitions.get('aus').classification).toEqual(1);
    expect(wordDefinitions.get('ausen').infinitiveTranslations.get(Language.ENGLISH)).toEqual('out of');
    expect(wordDefinitions.get('ausen').infinitiveTranslations.get(Language.POLISH)).toEqual('z, ze środka');
    expect(wordDefinitions.get('ausen').infinitiveTranslations.get(Language.GERMAN)).toEqual('aus');
    expect(wordDefinitions.get('ausen').value).toEqual('ausen');
    expect(wordDefinitions.get('ausen').classification).toEqual(1);
    expect(wordDefinitions.get('außer').infinitiveTranslations.get(Language.ENGLISH)).toEqual('except for');
    expect(wordDefinitions.get('außer').infinitiveTranslations.get(Language.POLISH)).toEqual('oprócz');
    expect(wordDefinitions.get('außer').infinitiveTranslations.get(Language.GERMAN)).toEqual('außer');
    expect(wordDefinitions.get('außer').value).toEqual('außer');
    expect(wordDefinitions.get('außer').classification).toEqual(1);
    expect(wordDefinitions.get('außeren').infinitiveTranslations.get(Language.ENGLISH)).toEqual('except for');
    expect(wordDefinitions.get('außeren').infinitiveTranslations.get(Language.POLISH)).toEqual('oprócz');
    expect(wordDefinitions.get('außeren').infinitiveTranslations.get(Language.GERMAN)).toEqual('außer');
    expect(wordDefinitions.get('außeren').value).toEqual('außeren');
    expect(wordDefinitions.get('außeren').classification).toEqual(1);
  });
});
