import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

//Components
import { AboutMainComponent } from './about-main/about-main.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AboutMainComponent, SummaryComponent, SkillsComponent]
})
export class AboutModule { }
