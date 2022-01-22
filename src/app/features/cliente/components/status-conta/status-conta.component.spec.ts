/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatusContaComponent } from './status-conta.component';

describe('StatusContaComponent', () => {
  let component: StatusContaComponent;
  let fixture: ComponentFixture<StatusContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
