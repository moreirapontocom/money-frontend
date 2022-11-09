import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-bar',
  templateUrl: './goal-bar.component.html',
  styleUrls: ['./goal-bar.component.scss']
})
export class GoalBarComponent implements OnInit {

  @Input() title: string = 'Goal';
  @Input() goalAmount: number = 0;
  @Input() description: string = '';
  @Input() currentAmount: number = 0;
  @Input() currentPercentAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
