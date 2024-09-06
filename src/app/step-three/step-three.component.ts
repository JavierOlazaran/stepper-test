import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { StepperStateService } from '../services/stepper-state.service';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent {
  stepperState = inject(StepperStateService);

  form = new FormGroup({
    birthDate: new FormControl(''),
    nationality: new FormControl(''),
  });

  constructor() {
    if (!this.stepperState.state().steps['stepThree']) {
      this.stepperState.addStep('stepThree', this.form.getRawValue());
    }
    else {
      this.form.setValue(this.stepperState.state().steps['stepThree'], { emitEvent: false });
    }
  }
}
