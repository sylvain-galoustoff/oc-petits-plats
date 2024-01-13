import recipes from "../../data/recipes.js";

export default function getRecipesFromIds(ids) {

    let filteredData = []

    ids.forEach(id => {
        const recipe = recipes.filter(item => item.id === id)
        filteredData.push(recipe[0])
    })

    return filteredData

}