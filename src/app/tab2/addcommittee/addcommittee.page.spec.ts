import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommitteePage } from './addcommittee.page';

describe('AddcommitteePage', () => {
  let component: AddcommitteePage;
  let fixture: ComponentFixture<AddcommitteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcommitteePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
