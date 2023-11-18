import { TestBed } from '@angular/core/testing';

import { GmpWindowService } from './gmp-window.service';

describe('GmpWindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpWindowService = TestBed.get(GmpWindowService);
    expect(service).toBeTruthy();
  });
});
