import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './../../_models/navitem.model';
import { navItems } from './navlist.metadata';

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.scss']
})
export class NavlistComponent implements OnInit {
  navItems = navItems;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  routeTo(route: string) {
    this._router.navigate(['route']);
  }

}
