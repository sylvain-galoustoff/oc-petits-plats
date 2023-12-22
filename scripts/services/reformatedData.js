import recipes from "../../data/recipes.js";

export default function reformatedData() {
  let newData = [];

  recipes.forEach((recipe) => {
    const recipeObj = {};
    recipeObj.id = recipe.id;

    let searchTermsPool = [];
    searchTermsPool.push(recipe.appliance)
    searchTermsPool.push(recipe.name)

    recipe.ingredients.forEach(ingredient => {
      searchTermsPool.push(ingredient.ingredient)
    })

    recipe.ustensils.forEach(ustensil => {
      searchTermsPool.push(ustensil)
    })

    recipeObj.searchTerms = searchTermsPool

    newData.push(recipeObj)

  });

  return newData;
}
