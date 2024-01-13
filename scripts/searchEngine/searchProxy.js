import setTermsPool from "../utils/setTermsPool.js";
import getAppliancesResult from "./getAppliancesResult.js";
import getIngredientsResult from "./getIngredientsResult.js";
import getUstensilsResult from "./getUstensilsResult.js";
import recipes from "../../data/recipes.js";

export const searchTerms = {
  main: "",
  ingredients: [],
  appliances: [],
  ustensils: [],
};

export const searchTermsProxy = new Proxy(searchTerms, {
  set: function (target, key, value) {
    target[key] = value;

    getSearchResult();

    return true;
  },
});

export default searchTermsProxy;

/**
 * getSearResult()
 * Crée un tableau des recettes pour chaque critere de recherche, puis compare ces tableaux pour retourner les recettes communes
 * @returns {Array} recettes résultant de la recherche croisée
 */

function getSearchResult() {

  let mainResult = []
  let ingredientsResult = []
  let appliancesResult = []
  let ustensilsResult = []

  if (searchTerms.main.length > 0) {
    mainResult = getMainResult()
  } else {
    mainResult = []
  }

  if (searchTerms.ingredients.length > 0) {
    ingredientsResult = getIngredientsResult(recipes, searchTerms.ingredients)
  } else {
    ingredientsResult = []
  }
  
  if (searchTerms.appliances.length > 0) {
    appliancesResult = getAppliancesResult(recipes, searchTerms.appliances)
  } else {
    appliancesResult = []
  }
  
  if (searchTerms.ustensils.length > 0) {
    ustensilsResult = getUstensilsResult(recipes, searchTerms.ustensils)
  } else {
    ustensilsResult = []
  }
  
  console.clear()
  console.log('Résultats Main : ', mainResult);
  console.log('Résultats Ingredients : ', ingredientsResult);
  console.log('Résultats Appareils : ', appliancesResult);
  console.log('Résultats Ustensils : ', ustensilsResult);
}

/**
 * getMainResult()
 * Crée un tableau d'ID des recettes correspondantes à la recherche du champ principal
 * @returns {Array}
 */

function getMainResult() {
  const recipesWithPool = setTermsPool();
  const recipesResult = recipesWithPool.filter(recipe => recipe.termsPool.includes(searchTerms.main))
  const mainResultIds = recipesResult.map(recipe => recipe.id)
  return mainResultIds
}






