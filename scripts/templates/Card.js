import IngredientDetails from "./IngredientDetails.js";

export default function Card({ image, name, description, ingredients }) {
  let $temp = document.querySelector("#card-template");
  let $card = $temp.content.cloneNode(true);

  $card.querySelector("img").setAttribute("src", `./assets/img/${image}`);
  $card.querySelector("img").setAttribute("alt", name);
  $card.querySelector(".recipe-title").innerText = name;
  $card.querySelector(".recipe-description").innerText = description;

  let $ingredientsList = $card.querySelector(".ingredients-list");

  ingredients.forEach((ingredient) => {
    let $ingredientDetails = IngredientDetails(ingredient);
    $ingredientsList.appendChild($ingredientDetails);
  });

  return $card;
}
