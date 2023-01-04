import { TestBed } from '@angular/core/testing';

import { A10Service } from './a10.service';

describe('A10Service', () => {
  let service: A10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
