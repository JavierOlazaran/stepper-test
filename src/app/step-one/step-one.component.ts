import { Component, inject, OnInit } from '@angular/core';
import { StepperStateService } from '../services/stepper-state.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
/*
  We could have an interface or an abstract class to define the structure of the steps
 */
export class StepOneComponent implements OnInit {
  stepperState = inject(StepperStateService);

  STEP_NAME = 'stepOne';

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
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

      console.log(this.stepperState.state());
    });
  }
}
