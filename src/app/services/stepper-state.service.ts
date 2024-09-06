import { Injectable, signal } from '@angular/core';

export interface StepperState {
  currentStep: number;
  // This can be typed to give structure to the steps data. For example things like form validity. {formValue: any, isValid: boolean}
  steps: {[key: string]: any};
}

@Injectable({
  providedIn: 'root'
})
export class StepperStateService {
  // This is the initial state of the stepper
  private initialState: StepperState = {
    currentStep: 0,
    steps: {}
  };

  // This is the signal that will hold the state of the stepper
  state = signal(this.initialState);

  /**
   * Set the current step of the stepper
   * @param step the currently selected step
   */
  setCurrentStep(step: number) {
    this.state.set({ ...this.state(), currentStep: step });
  }

  /**
   * Set the value of a step form
   * @param stepName the name of the step
   * @param value the value of the step
   */
  setStepFormValue(stepName: string, value: object) {
    this.state.set({ ...this.state(), steps: { ...this.state().steps, [stepName]: value } });
  }

  /**
   * Add a new step to the stepper state
   * @param key the key of the step
   * @param step the value of the step
   */
  addStep(key: string, step: any) {
    console.log(this.state());

    this.state.set({ ...this.state(), steps: { ...this.state().steps, [key]: step } });
    console.log(this.state());
  }
}
