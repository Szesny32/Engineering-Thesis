import { TestBed } from '@angular/core/testing';

import { A3Service } from './a3.service';

describe('A3Service', () => {
  let service: A3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
