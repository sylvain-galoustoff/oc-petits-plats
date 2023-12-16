import recipes from "../../data/recipes.js";

export default function renderIngredientsList(){

    const ingredientsList = []

    recipes.forEach(recipe => {
        const ingredients = recipe.ingredients
        ingredients.forEach(ingredient => {
            const oneIngredient = ingredient.ingredient
            
            if (!ingredientsList.includes(oneIngredient)) {
                ingredientsList.push(oneIngredient)
            }

        })
    })

    let uniqueIngredients = new Set(ingredientsList)
    uniqueIngredients = [...uniqueIngredients]

}