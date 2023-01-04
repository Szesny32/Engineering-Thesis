import { TestBed } from '@angular/core/testing';

import { A6Service } from './a6.service';

describe('A6Service', () => {
  let service: A6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
