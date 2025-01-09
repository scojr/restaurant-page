import { bannerConstructor, constructCardGrid } from "./constructors";
import heroImage from "./images/banner-goncharenok.jpg";
import tomatoCard from "./images/home-top5way.jpg";
import ovenCard from "./images/home-fariphotography.jpg";
import boxesCard from "./images/home-maxavans.jpg";
import bannerCard from "./images/home-castillo.jpg";

export function loadHome() {
  const homeGrid = constructCardGrid(2);
  const homeAbout = homeGrid.newCard("Welcome to Hans Pizzeria", "Step into a slice of New York tradition! At Hans Pizza, we bring you the perfect blend of old-world charm and modern flavors. From our signature hand-tossed pizzas to our hearty pastas and delightful deserts, every dish is crafted with love, fresh ingredients, and a commitment to quality.");
  homeAbout.scale(2, 0);
  bannerConstructor(heroImage, "Maksim Goncharenok", "https://www.pexels.com/photo/person-holding-a-pizza-4773769/", "Welcome to Hans.", "Authentic flavors, crafted with love.");
  const menuCard = homeGrid.newCard("", "", boxesCard, "Max Avans", "https://www.pexels.com/photo/person-slicing-the-pizzas-5056849/");
  menuCard.scale(0, 2);
  homeGrid.newCard("", "", ovenCard, "Eneida Nieves", "https://www.pexels.com/photo/baked-pizza-on-pizza-peel-in-oven-905847/");
  homeGrid.newCard("", "", tomatoCard, "Abdul Kadher Akib", "https://www.pexels.com/photo/close-up-photo-of-red-tomatoes-11463629/");
}
