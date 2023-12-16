import recipes from "../data/recipes.js";
import renderRecipes from "./utils/renderRecipes.js";
import countRecipes from "./utils/countRecipes.js";
import renderIngredientsList from "./utils/renderIngredientsList.js";

function init(){
    
    renderRecipes(recipes)

    countRecipes(recipes)

    renderIngredientsList()

}

init()