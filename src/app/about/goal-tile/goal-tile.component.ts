import { Component, OnInit, Input } from '@angular/core';
import { GoalItem } from './../../_models/goalitem.model';

@Component({
  selector: 'about-goal-tile',
  templateUrl: './goal-tile.component.html',
  styleUrls: ['./goal-tile.component.scss']
})
export class GoalTileComponent implements OnInit {
  @Input() goalItem;
  url: string;
  
  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return './../../../assets/images/icons/' + this.goalItem.icon;
  }
}
