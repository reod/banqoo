import { Component, Input } from '@angular/core';
import { Participation } from './../../services/budget-participation/budget-participation.service';


@Component({
  selector: 'app-participation-summary',
  templateUrl: './participation-summary.component.html',
  styleUrls: ['./participation-summary.component.css']
})
export class ParticipationSummaryComponent {
  @Input() expense: { value: number };
  @Input() participations: Participation[] = [];
  
  canShowSummary(): boolean {
    const min2Participations = this.participations.length >= 2;
    const validExpense = this.expense && this.expense.value > 0;

    return min2Participations && validExpense;
  }
}
