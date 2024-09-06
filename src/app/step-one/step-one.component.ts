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
export class StepOneComponent implements OnInit {
  stepperState = inject(StepperStateService);

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    if (!this.stepperState.state().steps['stepOne']) {
      this.stepperState.addStep('stepOne', this.form.getRawValue());
    }
    else {
      this.form.setValue(this.stepperState.state().steps['stepOne'], { emitEvent: false });
    }
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => {
      this.stepperState.setStepFormValue('stepOne', value);

      console.log(this.stepperState.state());
    });
  }
}
