import recipes from "../../data/recipes.js";

export default function setTermsPool() {
  let pool = [];

  recipes.forEach((recipe) => {
    const oneRecipe = {};
    oneRecipe.id = recipe.id;

    let terms = [];

    terms.push(recipe.appliance.toLowerCase());
    terms.push(recipe.name.toLowerCase());

    recipe.ingredients.forEach((ingredient) => {
      terms.push(ingredient.ingredient.toLowerCase());
    });

    recipe.ustensils.forEach((ustensil) => {
      terms.push(ustensil.toLowerCase());
    });

    terms = terms.join(',')
    oneRecipe.terms = terms;

    pool.push(oneRecipe);
  });

  return pool;
}
