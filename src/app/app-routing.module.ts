import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerbsFormsComponent} from './verbs-forms/verbs-forms.component';
import {PersonalPronounsComponent} from './personal-pronouns/personal-pronouns.component';
import {PossessivePronounsComponent} from './possessive-pronouns/possessive-pronouns.component';
import {VerbsConjunctionsComponent} from './verbs-conjunctions/verbs-conjunctions.component';
import {HomeComponent} from './home/home.component';
import {
  PresentPerfectSentenceComplementComponent
} from './present-perfect-sentence-complement/present-perfect-sentence-complement.component';
import {PastSimpleSentenceComplementComponent} from './past-simple-sentence-complement/past-simple-sentence-complement.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'irregular-verbs', component: VerbsFormsComponent},
  {path: 'personal-pronouns', component: PersonalPronounsComponent},
  {path: 'possessive-pronouns', component: PossessivePronounsComponent},
  {path: 'verb-conjunctions', component: VerbsConjunctionsComponent},
  {path: 'present-perfect-sentence-complement', component: PresentPerfectSentenceComplementComponent},
  {path: 'past-simple-sentence-complement', component: PastSimpleSentenceComplementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
