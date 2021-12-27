import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Recipe Description', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg'),
        new Recipe('Test Recipe 1', 'Test Recipe Description - New', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}