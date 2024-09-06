import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StepperStateService } from '../services/stepper-state.service';
import { StepOneComponent } from '../step-one/step-one.component';
import { StepTwoComponent } from '../step-two/step-two.component';
import { StepThreeComponent } from '../step-three/step-three.component';
import { StepsSummaryComponent } from '../steps-summary/steps-summary.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    CommonModule,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepsSummaryComponent
  ],
  providers: [StepperStateService],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  stepperState = inject(StepperStateService);

  steps: any[] = [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ];

  nextStep() {
    console.log(this.stepperState.state());
    this.stepperState.setCurrentStep(this.stepperState.state().currentStep + 1);
  }

  prevState() {
    console.log(this.stepperState.state());
    this.stepperState.setCurrentStep(this.stepperState.state().currentStep - 1);
  }

  isFirstStep() {
    return this.stepperState.state().currentStep === 0;
  }

  isLastStep() {
    return this.stepperState.state().currentStep === this.steps.length - 1;
  }
}
