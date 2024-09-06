import { Component, computed, inject, OnInit } from '@angular/core';
import { StepperStateService } from '../services/stepper-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps-summary.component.html',
  styleUrl: './steps-summary.component.scss'
})
export class StepsSummaryComponent implements OnInit {
  stepperState = inject(StepperStateService);

  stepsForms = computed(() => this.getStepsFormsData(this.stepperState.state().steps));

  ngOnInit(): void {

  }

  getStepsFormsData(stepsState: {[key: string]: any}) {
    return Object.keys(stepsState).map(step => {
      return {
        title: step,
        data: stepsState[step]
      }
    });
  }
}
