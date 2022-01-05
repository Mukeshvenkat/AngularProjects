import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.subscription = this.shoppinglistService.ingredientChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
