/**
 * getAppliancesResult()
 * Crée un tableau d'ID des recettes correspondantes à la recherche par appareil
 * @param {Array} recipes tableau de recettes
 * @param {Array} tags appareils à rechercher
 * @returns {Array}
 */

export default function getAppliancesResult(recipes, tags) {
  const searchTags = [...tags]
  const searchTag = searchTags[0]

  const filteredArray = recipes.map(recipe => {
    if (recipe.appliance.toLowerCase() === searchTag.toLowerCase()) {
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
    return getAppliancesResult(filteredArray, searchTags)
  }
}