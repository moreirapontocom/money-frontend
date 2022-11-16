import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goals.service';
import { HelperService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: any[] = [];
  currentPatrimonyAmount: number = 850000.00;

  constructor(
    private goalService: GoalService,
    public helpers: HelperService,
  ) { }

  ngOnInit(): void {
    this.getGoals();
  }

  private getGoals(): void {
    this.goalService.getGoals().subscribe((goals) => {
      this.goals = goals;
    });
  }

}
