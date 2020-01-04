import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient ('Apple', 5),
        new Ingredient ('Tomatoes', 8),
        new Ingredient ('Chillie', 3),
      ];


    constructor () {}

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addShoppingItem() {}

    deleteShoppingItem() {}
    
    clearShoppingItem() {}
}