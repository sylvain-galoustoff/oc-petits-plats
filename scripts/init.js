import recipes from "../data/recipes.js";
import renderRecipes from "./utils/renderRecipes.js";
import countRecipes from "./utils/countRecipes.js";
import ItemList from "./templates/ItemList.js";
import toggleDropdown from "./ui/toggleDropdown.js";
import mainSearch from "./ui/mainSearch.js";

function init() {
  mainSearch();

  ItemList("ingredients");
  ItemList("appliances");
  ItemList("ustensils");

  toggleDropdown();

  countRecipes(recipes);
  renderRecipes(recipes);
}

init();
