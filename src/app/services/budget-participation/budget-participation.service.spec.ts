import { TestBed, inject } from '@angular/core/testing';

import { BudgetParticipationService, Participant } from './budget-participation.service';

describe('BudgetParticipationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetParticipationService]
    });
  });

  it('should be created', inject([BudgetParticipationService], (service: BudgetParticipationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return equal participations when incomes are equal', inject([BudgetParticipationService], (service: BudgetParticipationService) => {
    const participantA = <Participant> { name: 'A', income: 200 };
    const participantB = <Participant> { name: 'B', income: 200 };
    const participants = <Participant[]> [participantA, participantB];

    const [participationA, participationB] = service.getParticipation(400, participants);
    
    expect(participationA.participation).toEqual(participationB.participation);
  }));
});
