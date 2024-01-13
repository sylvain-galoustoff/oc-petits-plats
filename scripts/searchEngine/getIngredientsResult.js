/**
 * getIngredientsResult()
 * Crée un tableau d'ID des recettes correspondantes à la recherche par ingrédient
 * @param {Array} recipes tableau de recettes
 * @param {Array} tags ingrédients à rechercher
 * @returns {Array}
 */

export default function getIngredientsResult(recipes, tags) {
  const searchTags = [...tags]
  const searchTag = searchTags[0]

  const filteredArray = recipes.map(recipe => {
    const index = recipe.ingredients.findIndex(elt => elt.ingredient.toLowerCase() === searchTag.toLowerCase())
    if(index > -1) {
      return recipe
    }
  }).filter(Boolean)

  searchTags.splice(0,1)
  if (searchTags.length === 0) {
    if (filteredArray.length > 0) {
      const filteredArrayIds = filteredArray.map(recipe => recipe.id)
      return filteredArrayIds
    } else {
      return []
    }
  } else {
    return getIngredientsResult(filteredArray, searchTags)
  }
}