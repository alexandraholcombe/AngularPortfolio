import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AboutMainComponent } from './about/about-main/about-main.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutMainComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);