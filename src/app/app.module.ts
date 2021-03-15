import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './shareable/components/heroes/heroes.module';
import { PageOneComponent } from './views/page-one/page-one.component';

@NgModule({
  declarations: [AppComponent, PageOneComponent],
  imports: [BrowserModule, AppRoutingModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
