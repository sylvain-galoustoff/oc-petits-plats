export default function SearchTag(term) {
  const temp = document.getElementById("search-term-template");
  let $searchTag = temp.content.cloneNode(true);
  $searchTag.querySelector(".search-term-value").innerText = term;

  console.log($searchTag);
  return $searchTag;
}
