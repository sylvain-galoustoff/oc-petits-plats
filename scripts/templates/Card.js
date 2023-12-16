import addClassNamesFromString from "../utils/addClassNamesFromString.js";
import IngredientsList from "./IngedientsList.js";

export default function Card({ image, name, description, ingredients }) {
  let $card = document.createElement("article");
  $card = addClassNamesFromString(
    $card,
    "bg-white rounded-[11px] h-full overflow-hidden"
  );

  let $thumbnail = document.createElement("div");
  $thumbnail = addClassNamesFromString(
    $thumbnail,
    "recipe-thumbnail h-[253px] overflow-hidden flex justify-center items-center mb-8"
  );

  let $image = document.createElement("img");
  $image = addClassNamesFromString($image, "block w-full h-auto");
  $image.setAttribute("src", `./assets/img/${image}`);
  $image.setAttribute("alt", name);

  let $name = document.createElement("h2");
  $name = addClassNamesFromString($name, "px-6 mb-7");
  $name.innerText = name;

  let $h3Recette = document.createElement("h3");
  $h3Recette = addClassNamesFromString($h3Recette, "px-6 mb-4");
  $h3Recette.classList.add("label");
  $h3Recette.innerText = "RECETTE";

  let $recette = document.createElement("p");
  $recette = addClassNamesFromString($recette, "px-6 mb-8");
  $recette.classList.add("description");
  $recette.innerText = description;

  let $h3Ingedients = document.createElement("h3");
  $h3Ingedients = addClassNamesFromString($h3Ingedients, "px-6 mb-4");
  $h3Ingedients.classList.add("label");
  $h3Ingedients.innerText = "INGREDIENTS";

  $thumbnail.appendChild($image);

  $card.appendChild($thumbnail);
  $card.appendChild($name);
  $card.appendChild($h3Recette);
  $card.appendChild($recette);
  $card.appendChild($h3Ingedients);
  $card.appendChild(IngredientsList(ingredients));

  return $card;
}
