import { docElements } from ".";

function pageLoader() {
  const header = document.createElement("h1");
  header.textContent = "Welcome to Odin!";
  docElements.content.appendChild(header);
}

export { pageLoader };