export default function countRecipes(recipes) {

    let recette, length

    if (recipes.length < 1) {
        length = 'aucune'
        recette = 'recette'
    } else if (recipes.length === 1) {
        length = recipes.length
        recette = 'recette'
    } else {
        length = recipes.length
        recette = 'recettes'
    }

  document.getElementById("recipes-count").innerText = `${length} ${recette}`
}
