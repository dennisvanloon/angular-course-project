import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.acouplecooks.com/wp-content/uploads/2020/10/Cauliflower-Stir-Fry-011.jpg'),
    new Recipe('A Second Recipe', 'This is just a second test', 'https://www.acouplecooks.com/wp-content/uploads/2020/10/Cauliflower-Stir-Fry-011.jpg')
  ];

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
