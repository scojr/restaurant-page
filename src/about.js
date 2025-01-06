import { bannerConstructor, cardContainerConstructor } from "./constructors";
import aboutBanner from "./images/banner-cottonbro.jpg";
import chefs from "./images/chefs.jpg";

export function loadAbout() {
  const aboutCardConstructor = cardContainerConstructor(2);
  bannerConstructor(aboutBanner, "cottonbro studio", "https://www.pexels.com/photo/person-holding-a-pizza-with-cheese-3944312/", "Our Story", "Fresh Ingredients, Family Tradition");
  aboutCardConstructor("", "", chefs, "Shary Reeves", "https://pixabay.com/photos/chefs-kitchen-pizza-cooks-5437743/");
  aboutCardConstructor("Humble beginnings", "Since 1975, Hans Pizza has been serving up authentic, hand-tossed New York pizza. We're proud to be a part of the city's rich culinary tradition, and we owe it all to our founder, Han Mangieri, who believed that great pizza starts with great ingredients and an even greater love for community.")
  aboutCardConstructor("Our mission", "In 1985, Joe passed the torch to our current owner, Mr. Aziz, a passionate chef with a deep appreciation for both classic recipes and bold innovation. Bringing his own unique flair, Mr. Aziz elevated Hans Pizza to new heights while honoring the original vision: to create a welcoming place where anyone could enjoy a perfect slice of New York pizza.");
}
