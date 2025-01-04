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
  return cardContainer;
}

export function bannerConstructor(title, img) {
  console.log(this);
}