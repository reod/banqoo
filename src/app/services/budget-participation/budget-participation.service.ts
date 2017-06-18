import { Injectable } from '@angular/core';

export interface Participant {
  name: string;
  income: number;
}

export class Participation {
  constructor(
    public expense: number,
    public participant: Participant,
    public participation: number
  ) {}
}


@Injectable()
export class BudgetParticipationService {
  getParticipation(expense: number, participants: Participant[]): Participation[] {
    if (isNaN(expense) || expense < 0) {
      throw new RangeError('Expense must be positive number.');
    }

    const sumOfIncomes = this.getSumOfIncomes(participants);

    if (sumOfIncomes < expense) {
      throw new RangeError('Sum of incomes lower than expense.');
    }

    const averageIncome = this.getAverageIncome(participants);
    const expenseEqualPart = expense / participants.length;

    return <Participation[]> participants.map((participant: Participant) => {
      const participationPower = participant.income / averageIncome;
      const participation = expenseEqualPart * participationPower;

      return new Participation(expense, participant, participation);
    });
  }

  private getAverageIncome(participants: Participant[]): number {
    const incomesSum = this.getSumOfIncomes(participants);
    return incomesSum / participants.length;
  }

  private getSumOfIncomes(participants: Participant[]): number {
    return participants.reduce((sum, participant) => sum + participant.income, 0);
  }
}
