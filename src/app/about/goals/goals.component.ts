import { Component, OnInit } from '@angular/core';
import { GoalItem } from './../../_models/goalitem.model';
import { goalItems } from './goals.metadata';

@Component({
  selector: 'about-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goalItems = goalItems;

  constructor() { }

  ngOnInit() {
  }

}
