import { TestBed } from '@angular/core/testing';

import { A8Service } from './a8.service';

describe('A8Service', () => {
  let service: A8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
