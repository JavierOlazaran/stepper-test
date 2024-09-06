import { Injectable, signal } from '@angular/core';

export interface StepperState {
  currentStep: number;
  steps: {[key: string]: any};
}

@Injectable({
  providedIn: 'root'
})
export class StepperStateService {
  private initialState: StepperState = {
    currentStep: 0,
    steps: {}
  };

  state = signal(this.initialState);

  constructor() { }

  setCurrentStep(step: number) {
    this.state.set({ ...this.state(), currentStep: step });
  }

  setStepFormValue(stepName: string, value: object) {
    this.state.set({ ...this.state(), steps: { ...this.state().steps, [stepName]: value } });
  }

  addStep(key: string, step: any) {
    console.log(this.state());

    this.state.set({ ...this.state(), steps: { ...this.state().steps, [key]: step } });
    console.log(this.state());
  }
}
