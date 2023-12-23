import Card from "../templates/Card.js";

export default function renderRecipes(data) {
  const recipeContainer = document.getElementById("recipes");
  recipeContainer.innerHTML = "";

  data.forEach((recipe) => {
    recipeContainer.appendChild(Card(recipe));
  });
}
