import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeaddmemberPage } from './committeeaddmember.page';

describe('CommitteeaddmemberPage', () => {
  let component: CommitteeaddmemberPage;
  let fixture: ComponentFixture<CommitteeaddmemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteeaddmemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeaddmemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
