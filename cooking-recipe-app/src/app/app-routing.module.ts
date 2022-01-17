import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { 
        path: 'recipes', 
        loadChildren: () => import('./recipes/recipes.module').then(moduleClass => moduleClass.RecipesModule)
    },
    { 
        path: 'shopping-list', 
        loadChildren: () => import('./shopping-list/shopping-list.module').then(moduleClass => moduleClass.ShoppingListModule)
    },
    { 
        path: 'auth', 
        loadChildren: () => import('./auth/auth.module').then(moduleClass => moduleClass.AuthModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}