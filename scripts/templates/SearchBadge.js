import searchTermsProxy from "../searchEngine/searchProxy.js";

export default function SearchBadge(term, dataType) {
  const temp = document.getElementById("search-badge-template");
  let $searchBadge = temp.content.cloneNode(true);
  $searchBadge = $searchBadge.querySelector(".search-badge");

  $searchBadge.setAttribute("id", `badge-${term}`);
  $searchBadge.querySelector(".search-term-value").innerText = term;

  $searchBadge
    .querySelector(".delete-search-term")
    .addEventListener("click", function () {
      let searchTerms = [...searchTermsProxy[dataType]];
      searchTerms = searchTerms.filter((searchTerm) => searchTerm !== term);
      searchTermsProxy[dataType] = searchTerms;

      document.getElementById(`badge-${term}`).remove();
    });

  return $searchBadge;
}
