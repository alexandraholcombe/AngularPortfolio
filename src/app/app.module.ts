import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutModule } from './about/about.module';


//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';

@NgModule({
  declarations: [
  NavbarComponent],
  imports: [
    BrowserModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
