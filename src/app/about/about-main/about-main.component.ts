import { Component, OnInit } from '@angular/core';
import { dividerTitles } from './about-main.metadata';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss']
})
export class AboutMainComponent implements OnInit {
  dividerTitles = dividerTitles;
  
  constructor() { }

  ngOnInit() {
  }

}
