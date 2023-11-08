import { TestBed } from '@angular/core/testing';

import { ClientAuthServiceService } from './client-auth-service.service';

describe('ClientAuthServiceService', () => {
  let service: ClientAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
