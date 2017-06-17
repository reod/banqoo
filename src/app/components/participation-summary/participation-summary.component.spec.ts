import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationSummaryComponent } from './participation-summary.component';

describe('ParticipationSummaryComponent', () => {
  let component: ParticipationSummaryComponent;
  let fixture: ComponentFixture<ParticipationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationSummaryComponent ]
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
