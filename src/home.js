import { docElements } from ".";
import { cardConstructor } from "./constructors";
import pizzaImage from "./images/pizzas.jpg"

// export function loadHome() {
//   const header = (function () {
//     const h1 = document.createElement("h1");
//     const p = document.createElement("p");
//     const img = document.createElement("img");
//     h1.textContent = "Han's Pizzeria";
//     p.textContent = "Welcome to Han's Pizzeria, Manhattan’s slice of heaven! Nestled in the heart of New York City, our pizzeria has been proudly serving the community with authentic, mouthwatering pizza and Italian classics since 2004.";
//     img.src = pizzaImage;
//     img.alt = "pizzas";
//     img.width = 500;
//     img.height = 750;
//     docElements.content.append(h1, p, img);
//   })();
// }

export function loadHome() {
  docElements.content.append(cardConstructor("Han's Pizzeria", "Welcome to Han's Pizzeria, Manhattan’s slice of heaven! Nestled in the heart of New York City, our pizzeria has been proudly serving the community with authentic, mouthwatering pizza and Italian classics since 2004."));
  docElements.content.append(cardConstructor("Lorem ipsum dolor", "Lorem ipsum dolor sit amet, est apeirian mandamus in. No per sale pericula necessitatibus, an ferri delectus pri. Labores blandit cum ut, his cu atqui quodsi, atomorum senserit ex mel. Nam quod posse definitionem no, ex vim magna facilis constituto, eu viris blandit evertitur qui. An quis suas vis, error liberavisse usu an."));
}

// docElements.content.append(makeCard("Han's Pizzeria", "Welcome to Han's Pizzeria, Manhattan’s slice of heaven! Nestled in the heart of New York City, our pizzeria has been proudly serving the community with authentic, mouthwatering pizza and Italian classics since 2004."));


