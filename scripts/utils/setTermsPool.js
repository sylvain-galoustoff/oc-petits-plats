/**
 * Retourne la liste complete des recettes avec un champ supplémentaire termsPool pour chaque recette
 * termsPool : une chaine de carateres contenant le nom, les ingredients, les ustensiles et les appareils.
 * Dans le but de faciliter la recherche via le champ de recherche principal
 * 
 * @returns {Array} Tableau des recettes modifiées
 */

import recipes from "../../data/recipes.js";

export default function setTermsPool() {

  const recipesWithTermsPool = [...recipes]

  recipesWithTermsPool.forEach((recipe) => {

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

    recipe.termsPool = terms

  });

  return recipesWithTermsPool

}
