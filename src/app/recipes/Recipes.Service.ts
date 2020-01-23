import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/ShoppingList.Service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      // this.recipeChanged.next(this.recipes.slice());
      this.recipeChanged.next(this.recipes);
    }

    getRecipes() {
      // return this.recipes.slice();
      return this.recipes;
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]){
      this.slService.addIngredients(ingredient);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      // this.recipeChanged.next(this.recipes.slice());
      this.recipeChanged.next(this.recipes);
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      // this.recipeChanged.next(this.recipes.slice());
      this.recipeChanged.next(this.recipes);
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      // this.recipeChanged.next(this.recipes.slice());
      this.recipeChanged.next(this.recipes);
    }

}


   // private recipes: Recipe[] = [
      //   new Recipe( 'A Test Recipe', 
      //               'This is a sample recipie', 
      //               'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FFs3-eKM8Jo0%2Fmaxresdefault.jpg&f=1&nofb=1',
      //               [
      //                 new Ingredient('Meat', 1),
      //                 new Ingredient('French Fries', 20),
      //               ]),
      //   new Recipe( 'Another Test Recipe', 
      //               'This is a sample recipie', 
      //               'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fserdy-m-dia-inc%2Fimage%2Fupload%2Ff_auto%2Ffl_lossy%2Fq_auto%3Aeco%2Fx_0%2Cy_0%2Cw_1279%2Ch_720%2Cc_crop%2Fw_576%2Ch_324%2Cc_scale%2Fv1507136658%2Ffoodlavie%2Fprod%2Frecettes%2Flanieres-de-boeuf-sauce-vin-rouge-et-pesto-5389bc69&f=1&nofb=1',
      //               [
      //                 new Ingredient('Buns', 4),
      //                 new Ingredient('Meat', 3),
      //                ]),
      // ];