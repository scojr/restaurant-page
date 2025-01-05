import { bannerConstructor, cardContainerConstructor } from "./constructors";
import aboutBanner from "./images/banner-cottonbro.jpg"

export function loadAbout() {
  const aboutCardConstructor = cardContainerConstructor(2);
  bannerConstructor(aboutBanner, "cottonbro studio", "https://www.pexels.com/photo/person-holding-a-pizza-with-cheese-3944312/", "Our Story", "Fresh Ingredients, Family Tradition");
  aboutCardConstructor("Hans Pizzeria", "Welcome to Hans Pizzeria, Manhattan’s slice of heaven! Nestled in the heart of New York City, our pizzeria has been proudly serving the community with authentic, mouthwatering pizza and Italian classics since 2004.");
  aboutCardConstructor("Lorem ipsum dolor", "Lorem ipsum dolor sit amet, est apeirian mandamus in. No per sale pericula necessitatibus, an ferri delectus pri. Labores blandit cum ut, his cu atqui quodsi, atomorum senserit ex mel. Nam quod posse definitionem no, ex vim magna facilis constituto, eu viris blandit evertitur qui. An quis suas vis, error liberavisse usu an.");
}
