import { TestBed, async, inject } from '@angular/core/testing';

import { DyfiauthGuard } from './dyfiauth.guard';

describe('DyfiauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DyfiauthGuard]
    });
  });

  it('should ...', inject([DyfiauthGuard], (guard: DyfiauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
