import { Component, OnInit } from '@angular/core';
import { CareerDevItem } from './../../_models/careerdevitem.model';
import { careerDevItems } from './career-development.metadata';

@Component({
  selector: 'about-career-development',
  templateUrl: './career-development.component.html',
  styleUrls: ['./career-development.component.scss']
})
export class CareerDevelopmentComponent implements OnInit {
  careerDevItems = careerDevItems;
  constructor() { }

  ngOnInit() {
  }

}
