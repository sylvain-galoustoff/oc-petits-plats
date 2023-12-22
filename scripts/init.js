import recipes from "../data/recipes.js";
import renderRecipes from "./utils/renderRecipes.js";
import countRecipes from "./utils/countRecipes.js";
import ItemList from "./templates/ItemList.js";
import getAllAppliances from "./services/getAllAppliances.js";
import getAllUstensils from "./services/getAllUstensils.js";
import toggleDropdown from "./ui/toggleDropdown.js";
import reformatedData from "./services/reformatedData.js";

function init() {

  reformatedData()

  toggleDropdown();
  
  ItemList("ingredients");
  ItemList("appliances");
  ItemList("ustensils");

  countRecipes(recipes);
  renderRecipes(recipes);
  getAllAppliances();

  getAllUstensils();
}

init();
