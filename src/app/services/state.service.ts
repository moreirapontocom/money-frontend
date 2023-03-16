import { Injectable } from "@angular/core";

export interface Goal {
  amount: number
  createdAt: string;
  updatedAt: string;
}

export interface AppState {
  currentPatrimonyAmount: number | null;
  mainGoalAmount: number | null;
  goals: Goal[];
}

@Injectable()
export class StateService {

  state: AppState = {
    currentPatrimonyAmount: null,
    mainGoalAmount: null,
    goals: []
  };

  setGoals = (payload: any): void => {
    this.state = {
      ...this.state,
      goals: payload,
    }
  }

  setCurrentPatrimonyAmount = (payload: number): void => {
    this.state = {
      ...this.state,
      currentPatrimonyAmount: payload,
    }
  }

  getState = (): AppState => {
    return this.state;
  }
}
