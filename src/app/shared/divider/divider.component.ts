import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
