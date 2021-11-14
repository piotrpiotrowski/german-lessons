import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Language} from './language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private labels = {
    ENGLISH: {
      verbsFormsTitle: 'Irregular verbs training',
      personalPronounsTitle: 'Personal pronouns training',
      possessivePronounsTitle: 'Possessive pronouns training',
      verbsConjunctionsTitle: 'Conjunctions of verbs in present tense',
      homeTitle: 'Choose your lesson from menu',
      check: 'Check',
      clear: 'Clear',
      reveal: 'Reveal',
      lessonSummary: 'Current lesson contains ',
      verbs: 'verbs',
      levelChoose: 'Choose your level',
      all: 'All',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      proficient: 'Proficient',
      auxiliaryVerbChoose: 'Choose auxiliary verb',
      show: 'Show',
      random10: 'random 10',
      random5: 'random 5',
      randomLetter: 'random letter',
      allAvailable: 'all available',
      pronouns: 'pronouns',
      formChoose: 'Choose form',
      singularMasculine: 'Singular Masculine',
      singularFeminine: 'Singular Feminine',
      singularNeutral: 'Singular Neutral',
      plural: 'Plural',
      infinitive: 'Infinitive',
      presentSimple: 'Present Simple',
      pastSimple: 'Past Simple',
      pastParticiple: 'Past Participle',
      i: 'I',
      youSingular: 'you',
      heSheIt: 'he/she/it',
      youPlural: 'you',
      nominative: 'Nominative',
      genitive: 'Genitive',
      accusative: 'Accusative',
      dative: 'Dative',
    },
    POLISH: {
      verbsFormsTitle: 'Trening czasowników nieregularnych',
      personalPronounsTitle: 'Trening zaimków osobowych',
      possessivePronounsTitle: 'Trening zaimków dzierżawczych',
      verbsConjunctionsTitle: 'Trenink domiany czasowników nieregularnych w czasie teraźniejszym',
      homeTitle: 'Wybierz lekcję z menu',
      check: 'Sprawdz',
      clear: 'Wyczyść',
      reveal: 'Odkryj',
      lessonSummary: 'Aktualna lekcja zawiera ',
      verbs: 'czasowników',
      levelChoose: 'Wybierz twój poziom',
      all: 'Wszystkie',
      beginner: 'Początkujący',
      intermediate: 'Średni',
      advanced: 'Zaawansowany',
      proficient: 'Biegły',
      auxiliaryVerbChoose: 'Wybierz czasownik pomocniczy',
      show: 'Pokaż',
      random10: 'Losowe 10',
      random5: 'Losowe 5',
      randomLetter: 'Losowa litera',
      allAvailable: 'wszystkie dostępne',
      pronouns: 'zaimków',
      formChoose: 'Wybierz formę',
      singularMasculine: 'Liczba pojedyncza męski',
      singularFeminine: 'Liczba pojedyncza żęśki',
      singularNeutral: 'Liczba pojedyncza nijaki',
      plural: 'Liczba mnoga',
      infinitive: 'Bezokolicznik',
      presentSimple: 'Czas Teraźniejszy',
      pastSimple: 'Czas Przeszły Prosty',
      pastParticiple: 'Imiesłów Bierny',
      i: 'ja',
      youSingular: 'ty',
      heSheIt: 'on/ona/ono',
      youPlural: 'wy',
      nominative: 'Mianownik',
      genitive: 'Dopełniacz',
      accusative: 'Biernik',
      dative: 'Celownik',
    },
    GERMAN: {
      verbsFormsTitle: 'Starke verben übungen',
      personalPronounsTitle: 'Personalpronomen übungen',
      possessivePronounsTitle: 'Possessivpronomen übungen',
      verbsConjunctionsTitle: 'Übungen Verbkonjugation',
      homeTitle: 'Wähle einen Unterricht vom Menu',
      check: 'Überprüfen',
      clear: '',
      reveal: 'Zeigen',
      lessonSummary: '',
      verbs: '',
      levelChoose: '',
      all: '',
      beginner: '',
      intermediate: '',
      advanced: '',
      proficient: '',
      auxiliaryVerbChoose: '',
      show: '',
      random10: '',
      random5: '',
      randomLetter: '',
      allAvailable: '',
      pronouns: '',
      formChoose: '',
      singularMasculine: '',
      singularFeminine: '',
      singularNeutral: '',
      plural: '',
      infinitive: '',
      presentSimple: '',
      pastSimple: '',
      pastParticiple: '',
      i: '',
      youSingular: '',
      heSheIt: '',
      youPlural: '',
      nominative: 'Nominativ',
      genitive: 'Genitiv',
      accusative: 'Accusativ',
      dative: 'Dativ',
    }

  };

  private languageCommand: BehaviorSubject<Language> = new BehaviorSubject<Language>(Language.ENGLISH);
  private currentLanguage: Language = Language.ENGLISH;

  public getChangeLanguageNotification(): BehaviorSubject<Language> {
    return this.languageCommand;
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  selectLanguage(language: Language): void {
    this.currentLanguage = language;
    this.languageCommand.next(language);
  }

  getLabel(key: string): string {
    return this.labels[this.currentLanguage][key] || key;
  }
}
