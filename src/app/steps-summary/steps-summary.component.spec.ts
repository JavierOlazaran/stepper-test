import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsSummaryComponent } from './steps-summary.component';

describe('StepsSummaryComponent', () => {
  let component: StepsSummaryComponent;
  let fixture: ComponentFixture<StepsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
