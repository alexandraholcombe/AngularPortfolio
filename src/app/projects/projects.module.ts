import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

//Components
import { ProjectsMainComponent } from './projects-main/projects-main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProjectsMainComponent
  ]
})
export class ProjectsModule { }
