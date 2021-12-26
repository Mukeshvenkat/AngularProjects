import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg'),
    new Recipe('Test Recipe 1', 'Test Recipe Description - New', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg')
  ]

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
