import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Participant, Participation } from './../../services/budget-participation/budget-participation.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent {
  @Input() expense: number;
  @Input() participants: Participant[];
  @Output() deleteParticipant: EventEmitter<Participant> = new EventEmitter<Participant>();
  
  delete(participant: Participant): void {
    this.deleteParticipant.emit(participant);
  }
}
