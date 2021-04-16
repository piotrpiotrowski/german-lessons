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
import { PersonalPronounsComponent } from './personal-pronouns/personal-pronouns.component';
import { PossessivePronounsComponent } from './possessive-pronouns/possessive-pronouns.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VerbsFormsComponent,
    MenuComponent,
    InputCellComponent,
    TrainingRowComponent,
    PersonalPronounsComponent,
    PossessivePronounsComponent,
    HomeComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
