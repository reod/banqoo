import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ParticipationSummaryComponent } from './components/participation-summary/participation-summary.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { PlncurrencyPipe } from './pipes/plncurrency/plncurrency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantListComponent,
    ParticipantListComponent,
    ParticipantComponent,
    ExpenseFormComponent,
    ParticipationSummaryComponent,
    AddParticipantComponent,
    PlncurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
