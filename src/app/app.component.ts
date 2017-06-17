import { Component, OnInit, DoCheck } from '@angular/core';
import { Participant, Participation, BudgetParticipationService } from './services/budget-participation/budget-participation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BudgetParticipationService]
})
export class AppComponent implements OnInit, DoCheck {
  participations: Participation[] = [];
  expense: any = { value: 2500 };
  participants: Participant[] = [
    { name: 'Tomek', income: 3500 },
    { name: 'Kasia', income: 3000 },
  ];

  constructor(public bPService: BudgetParticipationService) {}

  ngOnInit(): void {
    this.countParticipation();
  }

  ngDoCheck(): void {
    this.countParticipation();
  }

  countParticipation(): void {
    this.participations = this.bPService
      .getParticipation(this.expense.value, this.participants);
  }

  addParticipant(participant: Participant): void {
    this.participants.push(participant);
  }

}
