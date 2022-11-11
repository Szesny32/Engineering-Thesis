import { TestBed } from '@angular/core/testing';

import { CWEService } from './cwe.service';

describe('CWEService', () => {
  let service: CWEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CWEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
