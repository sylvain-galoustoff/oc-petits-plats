import recipes from "../../data/recipes.js";

export default function getAllUstensils() {
  const ustensilsList = [];

  recipes.forEach((recipe) => {
    const ustensils = recipe.ustensils;
    ustensils.forEach((ustensil) => {
      ustensilsList.push(ustensil.toLowerCase());
    });
  });

  let uniqueUstensils = new Set(ustensilsList);
  uniqueUstensils = [...uniqueUstensils];

  return uniqueUstensils.sort();
}
