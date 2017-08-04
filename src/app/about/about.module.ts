import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

//Components
import { AboutMainComponent } from './about-main/about-main.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { GoalsComponent } from './goals/goals.component';
import { CareerDevelopmentComponent } from './career-development/career-development.component';
import { GoalTileComponent } from './goal-tile/goal-tile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutMainComponent,
    SummaryComponent, 
    SkillsComponent, 
    GoalsComponent, 
    CareerDevelopmentComponent, GoalTileComponent
  ]
})
export class AboutModule { }
