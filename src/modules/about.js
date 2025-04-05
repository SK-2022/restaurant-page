{/* <div id="content">
       <main class="chef-pic-container">
        <img src="./images/AlessandroSerenzahorizontal.jpg" alt="Chef Alessandro Serenza focused on prepping the next meal" class="chef-pic">
       </main>
       <div class="chef-description"> 
        <h2 class="chef-description-headline">About Chef Alessandro Serenza</h2>

        <p class="chef-description-text"><strong>Passione. Precisione. Perfezione.</strong></p>
    
        <p class="chef-description-text">For Chef Alessandro Serenza, Italian cuisine is more than just food—it’s an art form, a lifelong pursuit of culinary excellence. Dedicated to crafting the pinnacle of Italian gastronomy, he focuses relentlessly on one thing and one thing only: perfection on the plate.</p>
    
        <p class="chef-description-text">Specializing in the delicate mastery of pasta, Chef Serenza transforms simple ingredients into unforgettable experiences. Every dish is a testament to his unwavering dedication, blending tradition with innovation to elevate Italian flavors to their purest form.</p>
    
        <p class="chef-description-text">Yet, beyond the kitchen’s intensity, Alessandro is as warm as the dishes he creates. His focus is unmatched, but so is his ability to make those around him feel welcome, creating an atmosphere where great food and great company come together in perfect harmony.</p>
    
        <p class="chef-description-text">Welcome to his world—where pasta is poetry, and passion is served on every plate.</p></div>
    </div> */}


export function createAboutPageElements(imageSource) {
    const contentContainer = document.getElementById("content");

    const mainContainer = document.createElement('main');
    mainContainer.classList.add('chef-pic-container');
    contentContainer.appendChild(mainContainer);

    const chefImage = document.createElement('img');
    chefImage.classList.add('chef-pic');
    chefImage.src = imageSource;
    chefImage.alt = "Chef Alessandro Serenza focused on prepping the next meal";
    mainContainer.appendChild(chefImage)

    
}