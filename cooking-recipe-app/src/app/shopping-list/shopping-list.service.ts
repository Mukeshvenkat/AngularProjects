import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ]

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}