import { docElements } from ".";

export function cardConstructor(title, paragraph, img, attributionName, attributionLink) {
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

  if (img) {
    card.classList.add("img-card");
    const imgContainer = document.createElement("img");
    imgContainer.setAttribute("src", img);
    imgContainer.setAttribute("alt", title);
    imgContainer.setAttribute("width", 600);
    imgContainer.setAttribute("height", 400);
    card.append(addAttribution(attributionName, attributionLink), imgContainer);
  }

  card.append(h2, p);
  cardContainer.appendChild(card);
  docElements.content.append(cardContainer);
}

export function bannerConstructor(img, attributionName, attributionLink, text, subtext) {
  const banner = document.createElement("div");
  banner.classList.add("hero-img")
  banner.style.backgroundImage = `url(${img})`;
  const textContainer = document.createElement("h1");
  textContainer.textContent = text;
  const subtextContainer = document.createElement("p");
  subtextContainer.textContent = subtext;
  banner.append(textContainer, subtextContainer, addAttribution(attributionName, attributionLink));
  docElements.content.append(banner);
}

function addAttribution(name, link) {
  const creditText = document.createElement("span");
  creditText.textContent = "Photo by ";
  const creditLink = document.createElement("a");
  creditLink.textContent = name;
  creditLink.setAttribute("href", link);
  creditText.append(creditLink);
  return creditText;
}