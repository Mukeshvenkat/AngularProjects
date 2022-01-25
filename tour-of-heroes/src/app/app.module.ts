import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TopHeroesComponent } from './heroes/top-heroes/top-heroes.component';
import { HeroesDetailsComponent } from './heroes/heroes-details/heroes-details.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    TopHeroesComponent,
    HeroesDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
