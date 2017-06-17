import { Component, OnInit, DoCheck } from '@angular/core';
import { Participant, Participation, BudgetParticipationService } from './services/budget-participation/budget-participation.service';
import { PersistanceService } from './services/persistance/persistance.service';


export interface AppState {
  expense: { value: number };
  participations: Participation[];
  participants: Participant[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BudgetParticipationService, PersistanceService]
})
export class AppComponent implements OnInit, DoCheck {
  participations: Participation[] = [];
  expense: any = { value: null };
  participants: Participant[] = [];

  private stateRestored: boolean = false;

  constructor(
    public bPService: BudgetParticipationService,
    public persistanceService: PersistanceService
  ) {}

  ngOnInit(): void {
    this.countParticipation();
    console.log(this.persistanceService.getSavedState())
    Object.assign(this, this.persistanceService.getSavedState());
    this.stateRestored = true;
  }

  ngDoCheck(): void {
    this.countParticipation();

    if (this.stateRestored) {
      this.saveAppState();
    }
  }

  countParticipation(): void {
    this.participations = this.bPService
      .getParticipation(this.expense.value, this.participants);
  }

  saveAppState(): void {
    const state: AppState = {
      expense: this.expense,
      participations: this.participations,
      participants: this.participants
    };

    this.persistanceService.saveState(state);
  }

  addParticipant(participant: Participant): void {
    this.participants.push(participant);
  }

}
