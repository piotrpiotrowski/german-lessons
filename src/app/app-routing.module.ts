import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerbsFormsComponent} from './verbs-forms/verbs-forms.component';
import {PersonalPronounsComponent} from './personal-pronouns/personal-pronouns.component';
import {PossessivePronounsComponent} from './possessive-pronouns/possessive-pronouns.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'irregular-verbs', component: VerbsFormsComponent},
  {path: 'personal-pronouns', component: PersonalPronounsComponent},
  {path: 'possessive-pronouns', component: PossessivePronounsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
