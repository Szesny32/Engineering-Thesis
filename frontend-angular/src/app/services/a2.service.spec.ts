import { TestBed } from '@angular/core/testing';

import { A2Service } from './a2.service';

describe('A2Service', () => {
  let service: A2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
