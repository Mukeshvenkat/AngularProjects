import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipes.model";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    onStoreRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('urltopostdata', recipes).
            subscribe(response => {
                console.log(response)
            })
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('urltogetdata').
        subscribe(recipes => {
            console.log(recipes);
            this.recipeService.setRecipes(recipes);
        })
    }
}