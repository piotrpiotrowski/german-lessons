import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VerbsFormsComponent} from './verbs-forms/verbs-forms.component';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
import {InputCellComponent} from './input-cell/input-cell.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {TrainingRowComponent} from './training-row/training-row.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {PersonalPronounsComponent} from './personal-pronouns/personal-pronouns.component';
import {PossessivePronounsComponent} from './possessive-pronouns/possessive-pronouns.component';
import {HomeComponent} from './home/home.component';
import {VerbsConjunctionsComponent} from './verbs-conjunctions/verbs-conjunctions.component';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {ResponsiveButtonToggleGroupComponent} from './responsive-button-toggle-group/responsive-button-toggle-group.component';
import {CommandButtonsComponent} from './command-buttons/command-buttons.component';
import {SentenceComplementComponent} from './sentence-complement/sentence-complement.component';
import {
  PresentPerfectSentenceComplementComponent
} from './present-perfect-sentence-complement/present-perfect-sentence-complement.component';
import {PastSimpleSentenceComplementComponent} from './past-simple-sentence-complement/past-simple-sentence-complement.component';
import {PresentSimpleSentenceComplementComponent} from './present-simple-sentence-complement/present-simple-sentence-complement.component';
import {PresentSimpleVerbsConjunctionsComponent} from './present-simple-verbs-conjunctions/present-simple-verbs-conjunctions.component';
import {PastSimpleVerbsConjunctionsComponent} from './past-simple-verbs-conjunctions/past-simple-verbs-conjunctions.component';
import {NounSentenceComplementComponent} from './noun-sentence-complement/noun-sentence-complement.component';
import {SentenceRowComponent} from './sentence-complement/sentence-row/sentence-row.component';
import {NounsPluralFormComponent} from './nouns-plural-form/nouns-plural-form.component';
import {PrepositionsSentenceComplementComponent} from './prepositions-sentence-complement/prepositions-sentence-complement.component';
import {
  PossessivePronounsSentenceComplementComponent
} from './possessive-pronouns-sentence-complement/possessive-pronouns-sentence-complement.component';

@NgModule({
  declarations: [
    AppComponent,
    VerbsFormsComponent,
    MenuComponent,
    InputCellComponent,
    TrainingRowComponent,
    PersonalPronounsComponent,
    PossessivePronounsComponent,
    HomeComponent,
    VerbsConjunctionsComponent,
    ResponsiveButtonToggleGroupComponent,
    CommandButtonsComponent,
    SentenceComplementComponent,
    SentenceRowComponent,
    PresentPerfectSentenceComplementComponent,
    PastSimpleSentenceComplementComponent,
    PresentSimpleSentenceComplementComponent,
    PresentSimpleVerbsConjunctionsComponent,
    PastSimpleVerbsConjunctionsComponent,
    NounSentenceComplementComponent,
    NounsPluralFormComponent,
    PrepositionsSentenceComplementComponent,
    PossessivePronounsSentenceComplementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
