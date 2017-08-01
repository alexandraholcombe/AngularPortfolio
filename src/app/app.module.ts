import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutModule } from './about/about.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { NavlistComponent } from './_components/navlist/navlist.component';
import { NavitemComponent } from './_components/navitem/navitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlistComponent,
    NavitemComponent
  ],
  imports: [
    BrowserModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
