import { Component, Input } from '@angular/core';
import { Participant, Participation } from './../../services/budget-participation/budget-participation.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent {
  @Input() expense: number;
  @Input() participants: Participant[];
  constructor() {}
}
