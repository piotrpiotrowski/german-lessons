import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsageModeSwitcherComponent} from './usage-mode-switcher.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UsageModeService} from '../usage-mode.service';
import {UsageMode} from '../usage-mode';
import {By} from '@angular/platform-browser';

describe('UsageModeSwitcherComponent', () => {
  let component: UsageModeSwitcherComponent;
  let fixture: ComponentFixture<UsageModeSwitcherComponent>;
  let usageModeService: any;

  beforeEach(async () => {
    usageModeService = jasmine.createSpyObj('UsageModeService', ['select']);

    await TestBed.configureTestingModule({
      declarations: [UsageModeSwitcherComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: UsageModeService, useValue: usageModeService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsageModeSwitcherComponent);
    component = fixture.componentInstance;
  });

  it('should display a training icon', () => {
    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[0].textContent).toEqual('model_training');
  });

  it('should display a play icon', () => {
    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[1].textContent).toEqual('casino');
  });

  it('should have usage mode UNLIMITED by default', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component.usageMode).toEqual(UsageMode.UNLIMITED);
  });

  it('should display a training icon as selected by default', () => {
    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[0].attributes['class'].value).toEqual('selected');
  });

  it('should display a play icon as selected by default', () => {
    // given
    component.usageMode = UsageMode.SINGLE;

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[1].attributes['class'].value).toEqual('selected');
  });

  it('should do not switch when usage mode is UNLIMITED and training icon was clicked', () => {
    // when
    fixture.debugElement
      .queryAll(By.css('mat-icon'))[0]
      .triggerEventHandler('click', {});

    // and
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[0].attributes['class'].value).toEqual('selected');

    // amd
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[1].attributes['class'].value).toEqual('single');
  });

  it('should do not switch when usage mode is SINGLE and play icon was clicked', () => {
    // given
    component.usageMode = UsageMode.SINGLE;

    // when
    fixture.debugElement
      .queryAll(By.css('mat-icon'))[1]
      .triggerEventHandler('click', {});

    // and
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[1].attributes['class'].value).toEqual('selected');

    // amd
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[0].attributes['class'].value).toEqual('unlimited');
  });

  it('should switch to usage mode SINGLE when usage mode is UNLIMITED and play icon was clicked', () => {
    // when
    fixture.debugElement
      .queryAll(By.css('mat-icon'))[1]
      .triggerEventHandler('click', {});

    // and
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[1].attributes['class'].value).toEqual('selected');

    // amd
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[0].attributes['class'].value).toEqual('unlimited');
  });


  it('should switch to usage mode UNLIMITED when usage mode is SINGLE and training icon was clicked', () => {
    // given
    component.usageMode = UsageMode.SINGLE;

    // when
    fixture.debugElement
      .queryAll(By.css('mat-icon'))[0]
      .triggerEventHandler('click', {});

    // and
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[0].attributes['class'].value).toEqual('selected');

    // amd
    expect(fixture.nativeElement.querySelectorAll('mat-icon')[1].attributes['class'].value).toEqual('single');
  });

});
