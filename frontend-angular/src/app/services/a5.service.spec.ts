import { TestBed } from '@angular/core/testing';

import { A5Service } from './a5.service';

describe('A5Service', () => {
  let service: A5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
