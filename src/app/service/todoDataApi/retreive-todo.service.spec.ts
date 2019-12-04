import { TestBed } from '@angular/core/testing';

import { RetreiveTodoService } from './retreive-todo.service';

describe('RetreiveTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetreiveTodoService = TestBed.get(RetreiveTodoService);
    expect(service).toBeTruthy();
  });
});
