export default function toggleDropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {

    let isOpen = false;

    dropdown.addEventListener("click", function () {
      if (isOpen === false) {
        this.classList.add("active");
      } else if (isOpen === true) {
        this.classList.remove("active");
      }
      isOpen = !isOpen;
    });

    dropdown.querySelectorAll("input").forEach(function (input) {
      input.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
    
  });
}
