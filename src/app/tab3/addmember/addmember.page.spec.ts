import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmemberPage } from './addmember.page';

describe('AddmemberPage', () => {
  let component: AddmemberPage;
  let fixture: ComponentFixture<AddmemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
