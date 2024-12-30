import { docElements } from ".";
import pizzaImage from "./images/pizzas.jpg"

export function loadHome() {
  const header = (function () {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");
    h1.textContent = "Han's Pizzeria";
    p.textContent = "Welcome to Han's Pizzeria, Manhattan’s slice of heaven! Nestled in the heart of New York City, our pizzeria has been proudly serving the community with authentic, mouthwatering pizza and Italian classics since 2004.";
    img.src = pizzaImage;
    img.alt = "pizzas";
    img.width = 500;
    img.height = 750;
    docElements.content.append(h1, p, img);
  })();
}