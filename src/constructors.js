import { docElements } from ".";

export function cardConstructor(title, paragraph) {
  let cardContainer = document.querySelector(".card-container");

  if (!cardContainer) {
    cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
  }

  const card = document.createElement("div");
  card.classList.add("card");
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const p = document.createElement("p");
  p.textContent = paragraph;
  card.append(h2, p);
  cardContainer.appendChild(card);
  docElements.content.append(cardContainer);
}

export function bannerConstructor(img, attributionName, attributionLink, text) {
  const banner = document.createElement("div");
  const attributionText = document.createElement("span");
  attributionText.textContent = "Photo by ";
  const attribution = document.createElement("a");
  attribution.textContent = attributionName;
  attribution.setAttribute("href", attributionLink);
  attributionText.append(attribution);
  banner.classList.add("hero-img")
  banner.style.backgroundImage = `url(${img})`;
  if (text) {
    const textContainer = document.createElement("p");
    textContainer.textContent = text;
    banner.append(textContainer);
  }
  banner.append(attributionText);
  docElements.content.append(banner);
}