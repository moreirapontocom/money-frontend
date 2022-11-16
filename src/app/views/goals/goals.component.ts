import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoalService } from 'src/app/services/goals.service';
import { HelperService } from 'src/app/services/helpers.service';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: any[] = [];
  currentPatrimonyAmount$: any = 0;

  constructor(
    public helpers: HelperService,
    private goalService: GoalService,
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
    this.getGoals();
    this._getCurrentPatrimonyAmount();
  }

  private getGoals(): void {
    this.goalService.getGoals().subscribe((goals) => {
      this.goals = goals;
    });
  }

  private _getCurrentPatrimonyAmount(): void {
    this.currentPatrimonyAmount$ = this.store.select('app').pipe(
      map((state: any) => state.currentPatrimonyAmount)
    );
  }

}
