import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { ParticipationSummaryComponent } from './components/participation-summary/participation-summary.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExpenseFormComponent,
        AddParticipantComponent,
        ParticipantListComponent,
        ParticipationSummaryComponent
      ],
      imports: [ FormsModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
