import { TestBed, inject } from '@angular/core/testing';

import { PersistanceService } from './persistance.service';

describe('PersistanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistanceService]
    });
  });

  it('should be created', inject([PersistanceService], (service: PersistanceService) => {
    expect(service).toBeTruthy();
  }));
});
