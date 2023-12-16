export default function IngredientsList({ ingredient, quantity, unit }) {
  let $temp = document.querySelector("#ingredient-template");
  let $ingredientDetails = $temp.content.cloneNode(true);

  $ingredientDetails.querySelector(".ingredient-name").innerText = ingredient;

  if (quantity) {
    let $ingredientQte = $ingredientDetails.querySelector(".ingredient-qte");
    $ingredientQte.innerText = quantity;

    if (unit) {
      $ingredientQte.innerText += ` ${unit}`;
    }
  }

  return $ingredientDetails;
}
