import "./styles.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
import { loadContact } from "./contact";

export const docElements = (function () {
  const content = document.querySelector("#content");
  const nav = document.querySelector("nav");
  const buttons = document.querySelectorAll("button");
  const logo = document.querySelector(".header-logo");
  return { content, nav, buttons, logo, };
})();

const pages = [
  { page: "home", function: loadHome },
  { page: "menu", function: loadMenu },
  { page: "about", function: loadAbout },
  { page: "contact", function: loadContact },
]

for (const button of docElements.buttons) {
  button.addEventListener("click", (e) => {
    loadPage(button.dataset.page);
  })
}

docElements.logo.addEventListener("click", (e) => {
  loadPage("home");
});

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

loadPage("home");