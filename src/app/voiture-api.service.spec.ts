import { TestBed } from '@angular/core/testing';

import { VoitureApiService } from './voiture-api.service';

describe('VoitureApiService', () => {
  let service: VoitureApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoitureApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
