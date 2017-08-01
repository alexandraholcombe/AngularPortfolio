import { Component, OnInit, Input } from '@angular/core';
import {NavItem} from './../../_models/navitem.model';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavitemComponent implements OnInit {
  @Input() navItem;
  constructor() { }

  ngOnInit() {
  }

}
