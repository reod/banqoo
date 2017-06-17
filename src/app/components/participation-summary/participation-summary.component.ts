import { Component, Input } from '@angular/core';
import { Participation } from './../../services/budget-participation/budget-participation.service';


@Component({
  selector: 'app-participation-summary',
  templateUrl: './participation-summary.component.html',
  styleUrls: ['./participation-summary.component.css']
})
export class ParticipationSummaryComponent {
  @Input() expense: number;
  @Input() participations: Participation[] = [];
  constructor() { }
}
