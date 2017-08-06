import { Component, OnInit, Input } from '@angular/core';
import { CareerDevItem } from './../../_models/careerdevitem.model';

@Component({
  selector: 'about-careerdev-tile',
  templateUrl: './careerdev-tile.component.html',
  styleUrls: ['./careerdev-tile.component.scss']
})
export class CareerdevTileComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
