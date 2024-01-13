export default function getAllIngredients(recipes) {
  const ingredientsList = [];

  recipes.forEach((recipe) => {
    const ingredients = recipe.ingredients;
    ingredients.forEach((ingredient) => {
      ingredientsList.push(ingredient.ingredient.toLowerCase());
    });
  });

  let uniqueIngredientsSet = new Set(ingredientsList);
  let uniqueIngredients = [...uniqueIngredientsSet];

  return uniqueIngredients.sort();
}
