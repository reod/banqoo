import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Participant } from './../../services/budget-participation/budget-participation.service';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {

  @Input() participant: Participant;
  @Output() deleteParticipant: EventEmitter<Participant> = new EventEmitter<Participant>();

  delete(participant: Participant): void {
    this.deleteParticipant.emit(participant);
  }

}
