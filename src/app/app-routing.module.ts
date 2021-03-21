import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerbsFormsComponent} from './verbs-forms/verbs-forms.component';
import {PersonalPronounsComponent} from './personal-pronouns/personal-pronouns.component';

const routes: Routes = [
  {path: 'irregular-verbs', component: VerbsFormsComponent},
  {path: 'personal-pronouns', component: PersonalPronounsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
