import { TestBed } from '@angular/core/testing';

import { ServiceChargementService } from './service-chargement.service';

describe('ServiceChargementService', () => {
  let service: ServiceChargementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChargementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
