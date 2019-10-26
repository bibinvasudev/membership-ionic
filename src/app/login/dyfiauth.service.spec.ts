import { TestBed } from '@angular/core/testing';

import { DyfiauthService } from './dyfiauth.service';

describe('DyfiauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DyfiauthService = TestBed.get(DyfiauthService);
    expect(service).toBeTruthy();
  });
});
