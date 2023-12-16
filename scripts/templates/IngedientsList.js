import addClassNamesFromString from "../utils/addClassNamesFromString.js";

export default function IngredientsList(ingredients) {
    let $ingredientsList = document.createElement('div')
    $ingredientsList = addClassNamesFromString($ingredientsList, "ingredients-list grid grid-cols-2 px-6 mb-16 gap-6")

    ingredients.forEach(ingredient => {
        let $ingredient = document.createElement('div')
        $ingredient.classList.add('ingredient')

        let $ingredientName = document.createElement('p')
        $ingredientName.classList.add('ingredient-name')
        $ingredientName.innerText = ingredient.ingredient

        $ingredient.appendChild($ingredientName)

        if (ingredient.quantity) {
            let $ingredientQte = document.createElement('p')
            $ingredientQte.classList.add('ingredient-qte')
            $ingredientQte.innerText = ingredient.quantity

            if (ingredient.unit) {
                let $ingredientUnit = document.createElement('span')
                $ingredientUnit.innerText = ` ${ingredient.unit}` 
                $ingredientQte.appendChild($ingredientUnit)
            }

            $ingredient.appendChild($ingredientQte)
        }

        $ingredientsList.appendChild($ingredient)
    })











    return $ingredientsList
}