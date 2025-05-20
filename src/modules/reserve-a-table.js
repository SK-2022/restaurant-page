export function createReservationForms() {
  const mainContainer = document.getElementById("content");
  const reservePageButton = document.getElementById("reserve");

  reservePageButton.addEventListener("click", function () {
    const formHTML = `  `; 
    // INSERT FORM CODE ABOVE

    mainContainer.innerHTML = formHTML;
  });
}
