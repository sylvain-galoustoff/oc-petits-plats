export default function SearchBadge(term) {
  const temp = document.getElementById("search-term-template");
  let $searchTag = temp.content.cloneNode(true);
  $searchTag.querySelector(".search-term-value").innerText = term;
  return $searchTag;
}
