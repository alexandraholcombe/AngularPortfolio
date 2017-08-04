import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

//Components
import { AboutMainComponent } from './about-main/about-main.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AboutMainComponent, SummaryComponent, SkillsComponent, ExperienceComponent, EducationComponent]
})
export class AboutModule { }
