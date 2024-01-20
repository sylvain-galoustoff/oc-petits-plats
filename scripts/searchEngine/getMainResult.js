import setTermsPool from "../utils/setTermsPool.js";

/**
 * getMainResult()
 * Crée un tableau d'ID des recettes correspondantes à la recherche du champ principal
 * @returns {Array}
 */

export default function getMainResult(searchTerms) {
  const recipesWithPool = setTermsPool();

  let recipesResult = [];
  let i = 0;
  while (i < recipesWithPool.length) {
    if (recipesWithPool[i].termsPool.includes(searchTerms)) {
      recipesResult.push(recipesWithPool[i]);
    }
    i++;
  }

  let mainResultIds = [];
  i = 0;
  while (i < recipesResult.length) {
    mainResultIds.push(recipesResult[i].id);
    i++;
  }

  return mainResultIds;
}
