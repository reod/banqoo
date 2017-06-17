import { TestBed, inject } from '@angular/core/testing';

import { BudgetParticipationService } from './budget-participation.service';

describe('BudgetParticipationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetParticipationService]
    });
  });

  it('should be created', inject([BudgetParticipationService], (service: BudgetParticipationService) => {
    expect(service).toBeTruthy();
  }));
});
