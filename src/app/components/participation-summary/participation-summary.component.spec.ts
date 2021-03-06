import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationSummaryComponent } from './participation-summary.component';
import { PlncurrencyPipe } from './../../pipes/plncurrency/plncurrency.pipe';

describe('ParticipationSummaryComponent', () => {
  let component: ParticipationSummaryComponent;
  let fixture: ComponentFixture<ParticipationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationSummaryComponent, PlncurrencyPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
