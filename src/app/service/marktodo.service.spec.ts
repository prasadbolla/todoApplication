import { TestBed } from '@angular/core/testing';

import { MarktodoService } from './marktodo.service';

describe('MarktodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarktodoService = TestBed.get(MarktodoService);
    expect(service).toBeTruthy();
  });
});
