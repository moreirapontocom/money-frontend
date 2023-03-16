import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers.service';
import { ProfileService } from 'src/app/services/profile.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mainGoalAmount: number = 0;
  currentPatrimonyAmount: number = 0;

  constructor(
    public helpers: HelperService,
    private stateService: StateService,
    private profileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this._getMainGoalAmount();
    this._getCurrentPatrimonyAmount();
  }

  private _getMainGoalAmount(): void {
    const currentAmount = this.stateService.getState().mainGoalAmount;
    if (!currentAmount) {
      this.profileService.getProfile().subscribe((response: any) => {
        this.mainGoalAmount = response.mainGoalAmount;
        this.stateService.setCurrentPatrimonyAmount(this.mainGoalAmount);
      });
    }
  }

  private _getCurrentPatrimonyAmount(): void {
    const currentAmount = this.stateService.getState().currentPatrimonyAmount;
    if (!currentAmount) {
      this.profileService.getProfile().subscribe((response: any) => {
        this.currentPatrimonyAmount = response.currentPatrimonyAmount;
        this.stateService.setCurrentPatrimonyAmount(this.currentPatrimonyAmount);
      });
    }
  }

}
