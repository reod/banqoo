import { Component, Input, OnInit } from '@angular/core';
import { Participant } from './../../services/budget-participation/budget-participation.service';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  @Input() participant: Participant;

  constructor() { }

  ngOnInit() {
  }

}
