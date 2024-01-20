import searchTermsProxy from "../searchEngine/searchProxy.js";

export default function mainSearch() {
  const mainSearch = document.getElementById("search-recipe");
  const resetSearch = document.getElementById("search-reset");

  mainSearch.addEventListener("input", function (e) {
    const term = e.target.value;

    if (term.length > 0) {
      resetSearch.classList.add("active");
    } else {
      resetSearch.classList.remove("active");
    }

    searchTermsProxy.main = term.toLowerCase();
  });

  resetSearch.addEventListener("click", function () {
    mainSearch.value = "";
    searchTermsProxy.main = "";
    resetSearch.classList.remove("active");
  });
}
