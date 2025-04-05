import "./styles.css";

import chefImage from './images/AlessandroSerenzahorizontal.jpg' //This was VERY challenging to figure out. The reason I couldn't get chef alessandro's picture to come on was because I didn't import it. When using modules you have to import the pictures. 
import { createHomepageElements } from "./modules/initial-page-load";
import { createAboutPageElements } from "./modules/about";

console.log('Server running....')

//Loads the homepage and creates all elements with their appropriate styles
// createHomepageElements()
createAboutPageElements(chefImage)

//Create the tab switching logic HERE. Wipe current conets of div#content and run the correct module for the corresponding tab.

