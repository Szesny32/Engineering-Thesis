import { TestBed } from '@angular/core/testing';

import { A9Service } from './a9.service';

describe('A9Service', () => {
  let service: A9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
