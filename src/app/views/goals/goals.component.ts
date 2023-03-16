import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoalService } from 'src/app/services/goals.service';
import { HelperService } from 'src/app/services/helpers.service';
import { map } from 'rxjs/operators'; 
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: any[] = [];
  goalsFiltered: any[] = [];
  currentPatrimonyAmount: any = 0;

  constructor(
    public helpers: HelperService,
    private goalService: GoalService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.getGoals();
    // this._getCurrentPatrimonyAmount();
  }

  private getGoals(): void {
    this.goalService.getGoals().subscribe((goals) => {
      this.goals = this.goalsFiltered = goals;
      this.stateService.setGoals(goals);
    });
  }

  // private _getCurrentPatrimonyAmount(): void {
  //   this.currentPatrimonyAmount = this.stateService.getState().currentPatrimonyAmount;
  // }

  sumGoalsAmount(sumType: string = 'all'): number {
    let number: number = 0;
    if (sumType === 'all') {
      number = this.goals.reduce((acc, goal) => acc + goal.amount, 0);
    } else if (sumType === 'isDone') {
      number = this.goals.reduce((sum: number, goal: any) => (goal.isDone) ? sum + goal.amount : sum, 0);
    } else if (sumType === '!isDone') {
      number = this.goals.reduce((sum: number, goal: any) => (!goal.isDone) ? sum + goal.amount : sum, 0);
    }
    return number;
  }

  countGoals(countType: string = 'all'): number {
    let number: number = 0;
    if (countType === 'all') {
      number = this.goals.length;
    } else if (countType === 'isDone') {
      number = this.goals.filter((goal) => goal.isDone).length;
    } else if (countType === '!isDone') {
      number = this.goals.filter((goal) => !goal.isDone).length;
    }
    return number;
  }

  moneyToGoals(moneyToGoals: number, currentAmount: number): number {
    return moneyToGoals - currentAmount;
  }

  filterGoalsByStatus(e: any): void {
    const status = e.target.value;
    const allGoals: any = this.stateService.getState().goals;
    let goals: any[] = [];
    if (status === 'all') {
      goals = allGoals;
    } else if (status === 'isDone') {
      goals = allGoals.filter((goal: any) => goal.isDone);
    } else if (status === '!isDone') {
      goals = allGoals.filter((goal: any) => !goal.isDone);
    }
    this.goalsFiltered = goals;
  }

}
