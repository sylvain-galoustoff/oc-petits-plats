/**
 * Retourne la liste complete des recettes avec un champ supplémentaire termsPool pour chaque recette
 * termsPool : une chaine de carateres contenant le nom, les ingredients, les ustensiles et les appareils.
 * Dans le but de faciliter la recherche via le champ de recherche principal
 *
 * @returns {Array} Tableau des recettes modifiées
 */

import recipes from "../../data/recipes.js";

export default function setTermsPool() {
  const recipesWithTermsPool = [...recipes];

  let i = 0;
  while (i < recipesWithTermsPool.length) {
    let terms = [];
    terms.push(recipesWithTermsPool[i].appliance.toLowerCase());
    terms.push(recipesWithTermsPool[i].name.toLowerCase());

    let j = 0;
    while (j < recipesWithTermsPool[i].ingredients.length) {
      terms.push(
        recipesWithTermsPool[i].ingredients[j].ingredient.toLowerCase()
      );
      j++;
    }

    let k = 0;
    while (k < recipesWithTermsPool[i].ustensils.length) {
      terms.push(recipesWithTermsPool[i].ustensils[k].toLowerCase());
      k++;
    }

    terms = terms.join(",");
    recipesWithTermsPool[i].termsPool = terms;
    i++;
  }

  return recipesWithTermsPool;
}
