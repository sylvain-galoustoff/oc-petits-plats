import getAllAppliances from "../services/getAllAppliances.js";
import getAllIngredients from "../services/getAllIngredients.js";
import getAllUstensils from "../services/getAllUstensils.js";

export default function ItemList(dataType) {
  //formater les données
  let fullData;
  switch (dataType) {
    case "ingredients":
      fullData = getAllIngredients();
      break;

    case "appliances":
      fullData = getAllAppliances();
      break;

    case "ustensils":
      fullData = getAllUstensils();
      break;

    default:
      console.error("Erreur de parametre pour la fonction ItemList");
      break;
  }

  displayItems(fullData, `${dataType}-list`);

  document
    .getElementById(`${dataType}-search`)
    .addEventListener("input", function (e) {
      const term = e.target.value;

      let itemsArray;
      if (term.length <= 2) {
        itemsArray = fullData;
      } else {
        itemsArray = filteredData(fullData, term);
      }
      
      displayItems(itemsArray, `${dataType}-list`);

    });
}

function filteredData(items, term) {
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(term.toLowerCase())
  );
  return filteredItems;
}

function displayItems(items, containerId) {
  const container = document.getElementById(containerId)
  container.innerHTML = "";

  const temp = document.getElementById("item-list-template");

  items.forEach((item) => {
    let $item = temp.content.cloneNode(true);
    const dataListItem = $item.querySelector('.data-list-item')
    dataListItem.innerText = item;

    dataListItem.addEventListener('click', function() {
      console.log(item);
    })

    container.appendChild($item);
  });
}
