import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { Participant } from './../../services/budget-participation/budget-participation.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent {
  @Output() newParticipant: EventEmitter<Participant> = new EventEmitter<Participant>();
  @ViewChild('name') nameInput;
  participant: Participant = <Participant> { name: '', income: null };

  constructor() { }

  addParticipant(): void {
    const { name, income } = this.participant;
    
    if (!name || !income) {
      return;
    }

    this.newParticipant.emit(Object.assign({}, this.participant));

    this.participant.name = '';
    this.participant.income = null;
    this.nameInput.nativeElement.focus();
  }

}
