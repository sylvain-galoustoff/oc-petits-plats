import recipes from "../../data/recipes.js";

export default function getAllAppliances() {
  const appliancesList = [];

  recipes.forEach((recipe) => {
    const appliance = recipe.appliance.toLowerCase();
    if (!appliancesList.includes(appliance)) {
      appliancesList.push(appliance);
    }
  });

  return appliancesList.sort();
}
