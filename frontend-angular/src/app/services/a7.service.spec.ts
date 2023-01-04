import { TestBed } from '@angular/core/testing';

import { A7Service } from './a7.service';

describe('A7Service', () => {
  let service: A7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
