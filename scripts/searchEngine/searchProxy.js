import getAppliancesResult from "./getAppliancesResult.js";
import getIngredientsResult from "./getIngredientsResult.js";
import getUstensilsResult from "./getUstensilsResult.js";
import getMainResult from "./getMainResult.js";
import getRecipesFromIds from "../services/getRecipesFromIds.js";
import recipes from "../../data/recipes.js";
import countRecipes from "../utils/countRecipes.js";
import renderRecipes from "../utils/renderRecipes.js";
import ItemList from "../templates/ItemList.js";
import {addNotifNoResult, removeNotifNoResult} from "../templates/NoSearchResult.js";

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
  let mainResult = [];
  let ingredientsResult = [];
  let appliancesResult = [];
  let ustensilsResult = [];

  if (searchTerms.main.length > 0) {
    mainResult = getMainResult(searchTerms.main);
  } else {
    mainResult = [];
  }

  if (searchTerms.ingredients.length > 0) {
    ingredientsResult = getIngredientsResult(recipes, searchTerms.ingredients);
  } else {
    ingredientsResult = [];
  }

  if (searchTerms.appliances.length > 0) {
    appliancesResult = getAppliancesResult(recipes, searchTerms.appliances);
  } else {
    appliancesResult = [];
  }

  if (searchTerms.ustensils.length > 0) {
    ustensilsResult = getUstensilsResult(recipes, searchTerms.ustensils);
  } else {
    ustensilsResult = [];
  }

  let commonIds = getCommonIds(
    mainResult,
    ingredientsResult,
    appliancesResult,
    ustensilsResult
  );
  if (commonIds === undefined) {
    commonIds = [];
  }

  const filteredRecipes = getRecipesFromIds(commonIds);

  if (!hasSearchTerm()) {
    removeNotifNoResult()
    countRecipes(recipes);
    renderRecipes(recipes);
    ItemList("ingredients", recipes);
    ItemList("appliances", recipes);
    ItemList("ustensils", recipes);
  } else if (hasSearchTerm() && filteredRecipes.length === 0) {
    addNotifNoResult()
    countRecipes(filteredRecipes);
    ItemList("ingredients", filteredRecipes);
    ItemList("appliances", filteredRecipes);
    ItemList("ustensils", filteredRecipes);
    renderRecipes(filteredRecipes);
  } else {
    removeNotifNoResult()
    countRecipes(filteredRecipes);
    ItemList("ingredients", filteredRecipes);
    ItemList("appliances", filteredRecipes);
    ItemList("ustensils", filteredRecipes);
    renderRecipes(filteredRecipes);
  }

  // console.clear()
  // console.log('Résultats Main : ', mainResult);
  // console.log('Résultats Ingredients : ', ingredientsResult);
  // console.log('Résultats Appareils : ', appliancesResult);
  // console.log('Résultats Ustensils : ', ustensilsResult);
  // console.log("EN COMMUN :");
  // console.log(commonIds);
  // console.log(filteredRecipes);
}

/**
 * getCommonIds
 * @param {...Array} arrays tableau contenant des tableaux d'id
 * @returns {Array} tableau des ids communes a tous les tableaux
 */
function getCommonIds(...arrays) {
  const nonEmptyArrays = arrays.filter((array) => array.length > 0);

  const commonIds = nonEmptyArrays.reduce((common, array) => {
    return common.filter((id) => array.includes(id));
  }, nonEmptyArrays[0]);

  return commonIds;
}

/**
 * hasSearchTerm
 * @returns {boolean} renvoie false s'il y a au moins 1 terme de recherche
 */
function hasSearchTerm() {
  const terms = Object.values(searchTerms);
  const checker = terms.map((value) => {
    if (value.length > 0) {
      return true;
    } else {
      return false;
    }
  });

  if (checker.includes(true)) {
    return true;
  }

  return false;
}
