import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe= new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 
                'This is a sample recipie', 
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FFs3-eKM8Jo0%2Fmaxresdefault.jpg&f=1&nofb=1'
                ),
    new Recipe( 'Another Test Recipe', 
                'This is a sample recipie', 
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fserdy-m-dia-inc%2Fimage%2Fupload%2Ff_auto%2Ffl_lossy%2Fq_auto%3Aeco%2Fx_0%2Cy_0%2Cw_1279%2Ch_720%2Cc_crop%2Fw_576%2Ch_324%2Cc_scale%2Fv1507136658%2Ffoodlavie%2Fprod%2Frecettes%2Flanieres-de-boeuf-sauce-vin-rouge-et-pesto-5389bc69&f=1&nofb=1'
                ),
  ];

  constructor() { }

  ngOnInit() {
  }

  passedRecipe(passedRecipe: Recipe) {
    this.selectedRecipe.emit(passedRecipe);
  }

}
