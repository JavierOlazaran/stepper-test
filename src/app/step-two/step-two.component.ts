import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { StepperStateService } from '../services/stepper-state.service';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
/*
  We could have an interface or an abstract class to define the structure of the steps
 */
export class StepTwoComponent implements OnInit {
  readonly STEP_NAME = 'stepTwo';
  stepperState = inject(StepperStateService);

  form = new FormGroup({
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  });

  constructor() {
    if (!this.stepperState.state().steps[this.STEP_NAME]) {
      this.stepperState.addStep(this.STEP_NAME, this.form.getRawValue());
    }
    else {
      this.form.setValue(this.stepperState.state().steps[this.STEP_NAME], { emitEvent: false });
    }
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => {
      this.stepperState.setStepFormValue(this.STEP_NAME, value);
    });
  }
}
