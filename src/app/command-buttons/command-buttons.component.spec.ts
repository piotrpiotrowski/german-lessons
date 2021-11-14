import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandButtonsComponent} from './command-buttons.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatInput} from '@angular/material/input';

describe('CommandButtonsComponent', () => {
  let component: CommandButtonsComponent;
  let fixture: ComponentFixture<CommandButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandButtonsComponent, MatInput],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandButtonsComponent);
    component = fixture.componentInstance;
  });
});
