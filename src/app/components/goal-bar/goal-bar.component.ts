import { Component, Input, OnInit } from '@angular/core';

import * as dayjs from 'dayjs';
import { GoalService } from 'src/app/services/goals.service';
import { HelperService } from 'src/app/services/helpers.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-goal-bar',
  templateUrl: './goal-bar.component.html',
  styleUrls: ['./goal-bar.component.scss']
})
export class GoalBarComponent implements OnInit {

  @Input() goal: any;

  currentPatrimonyAmount: number = 0;

  @Input() title: string = 'Goal';
  @Input() goalAmount: number = 0;
  @Input() description: string = '';
  @Input() dueDate: string = '';
  @Input() currentAmount: number = 0;
  @Input() currentPercentAmount: number = 0;
  @Input() isDone: boolean = false;

  constructor(
    public helpers: HelperService,
    private stateService: StateService,
    private goalService: GoalService,
  ) { }

  ngOnInit(): void {
    this.currentPatrimonyAmount = this.stateService.getState().currentPatrimonyAmount || 0;
  }

  calculateDiffDatesFromToday(startDate: string): number {
    return dayjs(startDate).diff(dayjs(), 'month');
  }

  calculateMoneyToGoal(goalAmount: any, currentAmount: number): any {
    return goalAmount - currentAmount;
  }

  calculatePercentToGoal(percentAmount: any): any {
    return 100 - percentAmount;
  }

  calculateMonthlyAmountToGoal(moneyToGoal: number, monthsToDueDate: number): any {
    return moneyToGoal / monthsToDueDate;
  }

  markAsDone(goal: any): void {
    goal.isDone = !goal.isDone;
    this.goalService.updateGoal(goal).subscribe((response: any) => {
      console.log('response', response);
    });
  }


}
