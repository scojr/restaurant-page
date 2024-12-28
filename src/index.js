import "./styles.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

export const docElements = (function () {
  const content = document.querySelector("#content");
  const nav = document.querySelector("nav");
  const buttons = document.querySelectorAll("button");
  return { content, nav, buttons }
})();

const pages = [
  { page: "home", function: loadHome },
  // { page: "order", function: loadOrder },
  { page: "menu", function: loadMenu },
  // { page: "about", function: loadAbout },
  // { page: "contact", function: loadContact },

]

for (const button of docElements.buttons) {
  button.addEventListener("click", (e) => {
    loadPage(button.dataset.page);
  })
}

function loadPage(pageToLoad) {
  clearContent()
  const page = pages.find(pages => pages.page === pageToLoad)
  page.function();
}

function clearContent() {
  while (docElements.content.lastChild) {
    docElements.content.lastChild.remove();
  }
}

loadHome();