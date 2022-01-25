import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { TopHeroesComponent } from './heroes/top-heroes/top-heroes.component';

const appRoutes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: TopHeroesComponent },
    { path: 'heroeslist', component: HeroesListComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
