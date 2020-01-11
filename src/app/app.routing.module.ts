import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'}, // will redirect if the full path is empty
    {path: 'recipes', component: RecipesComponent, children : [
        {path: ':id/', component: RecipeDetailComponent},
    ]},
    {path: 'shopping-list', component: ShoppingListComponent, children: [
        {path: ':id/edit', component: ShoppingEditComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}