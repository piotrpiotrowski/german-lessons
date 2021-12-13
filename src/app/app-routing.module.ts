import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerbsFormsComponent} from './verbs-forms/verbs-forms.component';
import {PersonalPronounsComponent} from './personal-pronouns/personal-pronouns.component';
import {PossessivePronounsComponent} from './possessive-pronouns/possessive-pronouns.component';
import {HomeComponent} from './home/home.component';
import {
  PresentPerfectSentenceComplementComponent
} from './present-perfect-sentence-complement/present-perfect-sentence-complement.component';
import {PastSimpleSentenceComplementComponent} from './past-simple-sentence-complement/past-simple-sentence-complement.component';
import {PresentSimpleSentenceComplementComponent} from './present-simple-sentence-complement/present-simple-sentence-complement.component';
import {PresentSimpleVerbsConjunctionsComponent} from './present-simple-verbs-conjunctions/present-simple-verbs-conjunctions.component';
import {PastSimpleVerbsConjunctionsComponent} from './past-simple-verbs-conjunctions/past-simple-verbs-conjunctions.component';
import {NounSentenceComplementComponent} from './noun-sentence-complement/noun-sentence-complement.component';
import {NounsPluralFormComponent} from './nouns-plural-form/nouns-plural-form.component';
import {PrepositionsSentenceComplementComponent} from './prepositions-sentence-complement/prepositions-sentence-complement.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'irregular-verbs', component: VerbsFormsComponent},
  {path: 'personal-pronouns', component: PersonalPronounsComponent},
  {path: 'possessive-pronouns', component: PossessivePronounsComponent},
  {path: 'present-simple-verb-conjunctions', component: PresentSimpleVerbsConjunctionsComponent},
  {path: 'past-simple-verb-conjunctions', component: PastSimpleVerbsConjunctionsComponent},
  {path: 'present-perfect-sentence-complement', component: PresentPerfectSentenceComplementComponent},
  {path: 'past-simple-sentence-complement', component: PastSimpleSentenceComplementComponent},
  {path: 'present-simple-sentence-complement', component: PresentSimpleSentenceComplementComponent},
  {path: 'noun-sentence-complement', component: NounSentenceComplementComponent},
  {path: 'noun-forms', component: NounsPluralFormComponent},
  {path: 'prepositions-sentence-complement', component: PrepositionsSentenceComplementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
