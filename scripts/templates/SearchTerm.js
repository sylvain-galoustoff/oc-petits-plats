export default function SearchTerm(term) {
  const temp = document.getElementById("search-term-template");
  let $searchTerm = temp.content.cloneNode(true);
  $searchTerm.querySelector(".search-term-value").innerText = term;

  console.log($searchTerm);
  return $searchTerm;
}
