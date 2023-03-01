// const firstColumn = document.querySelector(".col.order-first");
// const secondColumn = document.querySelector(".col.order-2");
// const thirdColumn = document.querySelector(".col.order-3");
const allColumns = document.querySelectorAll(
  ".col.order-first, .col.order-2, .col.order-last"
);

function toggleClassOnMouseOver(element, className) {
  element.addEventListener("mouseover", () => {
    element.classList.add(className);
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove(className);
  });
}

allColumns.forEach((column) => {
  toggleClassOnMouseOver(column, "containerRev");
});



