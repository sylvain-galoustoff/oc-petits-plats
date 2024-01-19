import setTermsPool from "../utils/setTermsPool.js";

/**
 * getMainResult()
 * Crée un tableau d'ID des recettes correspondantes à la recherche du champ principal
 * @returns {Array}
 */

export default function getMainResult(searchTerms) {
  const recipesWithPool = setTermsPool();
  const recipesResult = recipesWithPool.filter(recipe => recipe.termsPool.includes(searchTerms))
  const mainResultIds = recipesResult.map(recipe => recipe.id)
  return mainResultIds
}