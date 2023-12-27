import getRecipesFromIds from "../services/getRecipesFromIds.js";
import countRecipes from "../utils/countRecipes.js";
import renderRecipes from "../utils/renderRecipes.js";
import setTermsPool from "../utils/setTermsPool.js";

export const searchTerms = {
  main: "",
  ingredients: [],
  appliances: [],
  ustensils: [],
};

export const searchTermsProxy = new Proxy(searchTerms, {
  set: function (target, key, value) {
    target[key] = value;

    const resultIds = getResultIds(searchTerms);
    const filteredRecipes = getRecipesFromIds(resultIds);
    renderRecipes(filteredRecipes)
    countRecipes(filteredRecipes)

    return true;
  },
});

export default searchTermsProxy;

//getResultIds : Obtenir les ID des recettes correspondantes aus termes de la recherche
function getResultIds(terms) {
  console.log(terms);

  const pool = setTermsPool();

  //Obtenir obtenir un tableau des ID de recettes qui contiennent la recherche principale
  let mainSearchResultIds = [];
  pool.forEach((item) => {
    if (item.terms.includes(terms.main)) {
      mainSearchResultIds.push(item.id);
    }
  });

  //Obtenir obtenir un tableau des ID de recettes qui contiennent les ingrédients
  let ingredientsResultIds = [];
  terms.ingredients.forEach((ingredient) => {
    pool.forEach((item) => {
      if (item.terms.includes(ingredient)) {
        ingredientsResultIds.push(item.id);
      }
    });
  });

  //Obtenir obtenir un tableau des ID de recettes qui contiennent les appliances
  let appliancesResultID = [];
  terms.appliances.forEach((appliance) => {
    pool.forEach((item) => {
      if (item.terms.includes(appliance)) {
        appliancesResultID.push(item.id);
      }
    });
  });

  //Obtenir obtenir un tableau des ID de recettes qui contiennent les ustensiles
  let ustensilsResultIds = [];
  terms.ustensils.forEach((ustensil) => {
    pool.forEach((item) => {
      if (item.terms.includes(ustensil)) {
        ustensilsResultIds.push(item.id);
      }
    });
  });

  //Obtenir un teableau contenant uniquement les id en commun sur les 4 tableaux précédents
  return getCommonIds(
    mainSearchResultIds,
    ingredientsResultIds,
    appliancesResultID,
    ustensilsResultIds
  );
}

function getCommonIds(...arrays) {
  // Filtrer les tableaux vides
  const nonEmptyArrays = arrays.filter((array) => array.length > 0);

  // s'il n'y a qu'un tableau qui n'est pas vide, on le retourne
  if (nonEmptyArrays.length === 1) {
    return nonEmptyArrays[0];
  } else if (nonEmptyArrays.length < 1) {
    // Si tous les tableaux sont vide, on retourne un tableau vide
    return [];
  }

  // Utiliser la méthode filter sur le premier tableau non vide
  const result = nonEmptyArrays[0].filter((element) => {
    // Vérifier si l'élément est présent dans tous les autres tableaux non vides
    return nonEmptyArrays.slice(1).every((array) => array.includes(element));
  });

  return result;
}
