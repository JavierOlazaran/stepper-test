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
/*
  We could have an interface or an abstract class to define the structure of the steps
 */
export class StepThreeComponent {
  stepperState = inject(StepperStateService);

  STEP_NAME = 'stepThree';

  form = new FormGroup({
    birthDate: new FormControl(''),
    nationality: new FormControl(''),
  });

  constructor() {
    if (!this.stepperState.state().steps[this.STEP_NAME]) {
      this.stepperState.addStep(this.STEP_NAME, this.form.getRawValue());
    }
    else {
      this.form.setValue(this.stepperState.state().steps[this.STEP_NAME], { emitEvent: false });
    }
  }
}
