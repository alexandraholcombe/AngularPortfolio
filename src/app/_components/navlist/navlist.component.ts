import { Component, OnInit } from '@angular/core';
import { NavItem } from './../../_models/navitem.model';
import { navItems } from './navlist.metadata';

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.scss']
})
export class NavlistComponent implements OnInit {
  navItems = navItems;
  constructor() { }

  ngOnInit() {
  }

}
