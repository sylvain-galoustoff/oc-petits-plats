export function addNotifNoResult() {
  let $temp = document.querySelector("#no-result-template");
  let $noResult = $temp.content.cloneNode(true);

  document.querySelector("#notifs").appendChild($noResult);
}
export function removeNotifNoResult() {
  document.querySelector("#notifs").innerHTML = "";
}
