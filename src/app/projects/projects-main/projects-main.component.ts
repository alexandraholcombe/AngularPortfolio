import { Component, OnInit } from '@angular/core';
import { dividerTitles } from './projects-main.metadata';

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.scss']
})
export class ProjectsMainComponent implements OnInit {
  dividerTitles = dividerTitles;

  constructor() { }

  ngOnInit() {
  }

}
