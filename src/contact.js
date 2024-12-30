import { docElements } from ".";

export function loadContact() {
  const header = document.createElement("h1");
  header.textContent = "Welcome to Odin!";
  docElements.content.appendChild(header);
}