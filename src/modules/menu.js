// <!-- <div class="menu-container"> -->
//         <div class="first-line-of-menu">
//           <div class="menu-item-container">
//             <img
//               src="./images/Landscape pasta A.jpg"
//               alt="image of spaghetti in delicious white sauce"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/Landscape Pasta B.jpg"
//               alt="pasta balls in meat sauce"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/landscape pasta C.jpg"
//               alt="pasta in spices and green leaves"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//         </div>
//         <div class="second-line-of-menu">
//           <div class="menu-item-container">
//             <img
//               src="./images/landscape pasta D.jpg"
//               alt="macaroni pasta with some bread with butter"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/lansdscape italian meat.jpg"
//               alt="lamb chops"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/Pasta B .jpg"
//               alt="spaghetti with shrimp and tomato"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//         </div>
//       <!-- </div> -->

//Its not working just yet. Work on this next time
export function createMenu() {
    const menuData = [
      {
        src: "./images/Landscape pasta A.jpg",
        alt: "image of spaghetti in delicious white sauce",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "./images/Landscape Pasta B.jpg",
        alt: "pasta balls in meat sauce",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "./images/landscape pasta C.jpg",
        alt: "pasta in spices and green leaves",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "./images/landscape pasta D.jpg",
        alt: "macaroni pasta with some bread with butter",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "./images/lansdscape italian meat.jpg",
        alt: "lamb chops",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "./images/Pasta B .jpg",
        alt: "spaghetti with shrimp and tomato",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
    ];
  
    const contentDiv = document.getElementById("content");
    if (!contentDiv) {
      console.error("No element with id 'content' found in the document.");
      return;
    }
  
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
  
    const firstLine = document.createElement("div");
    firstLine.className = "first-line-of-menu";
  
    const secondLine = document.createElement("div");
    secondLine.className = "second-line-of-menu";
  
    menuData.forEach((item, index) => {
      const container = document.createElement("div");
      container.className = "menu-item-container";
  
      const img = document.createElement("img");
      img.className = "menu-item-image";
      img.src = item.src;
      img.alt = item.alt;
  
      const desc = document.createElement("div");
      desc.className = "menu-item-description";
      desc.textContent = item.description;
  
      container.appendChild(img);
      container.appendChild(desc);
  
      if (index < 3) {
        firstLine.appendChild(container);
      } else {
        secondLine.appendChild(container);
      }
    });
  
    menuContainer.appendChild(firstLine);
    menuContainer.appendChild(secondLine);
    contentDiv.appendChild(menuContainer);
  }
  