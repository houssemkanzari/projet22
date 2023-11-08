import { TestBed } from '@angular/core/testing';

import { RevieuxService } from './revieux.service';

describe('RevieuxService', () => {
  let service: RevieuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevieuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
