/* <main class="main-container carousel">
            <div class="carousel-content">
                <div class="catch-phrase-main">The best homemade Italian dishes in Japan</div>
                <div class="-order-button-container">
                    <!-- Order button should direct you straight to the menu. -->
                    <button class="dine-with-us-button">Dine with us</button>
                </div>
            </div>
        </main> */

export function createHomepageElements() {
  const contentContainer = document.getElementById("content");

  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main-container", "carousel");
  contentContainer.appendChild(mainContainer);

  const carousel = document.createElement("div");
  carousel.classList.add("carousel-content");
  mainContainer.appendChild(carousel);

  const catchPhraseDiv = document.createElement("div");
  catchPhraseDiv.classList.add("catch-phrase-main");
  catchPhraseDiv.textContent = "The best homemade Italian dishes in Japan";
  carousel.appendChild(catchPhraseDiv);

  // I'm worried about the order of appending. We will see what happens.
  const orderButtonContainer = document.createElement("div");
  orderButtonContainer.classList.add("order-button-container");
  carousel.appendChild(orderButtonContainer);

  const dineWithUsButton = document.createElement("button");
  dineWithUsButton.classList.add("dine-with-us-button");
  dineWithUsButton.textContent = "Dine with us"
  orderButtonContainer.appendChild(dineWithUsButton);
}
