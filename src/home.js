import { bannerConstructor, cardConstructor } from "./constructors";
import heroImage from "./images/banner-goncharenok.jpg"

export function loadHome() {
  bannerConstructor(heroImage, "Maksim Goncharenok", "https://www.pexels.com/photo/person-holding-a-pizza-4773769/");
  cardConstructor("Hans Pizzeria", "Welcome to Hans Pizzeria, Manhattan’s slice of heaven! Nestled in the heart of New York City, our pizzeria has been proudly serving the community with authentic, mouthwatering pizza and Italian classics since 2004.");
  cardConstructor("Lorem ipsum dolor", "Lorem ipsum dolor sit amet, est apeirian mandamus in. No per sale pericula necessitatibus, an ferri delectus pri. Labores blandit cum ut, his cu atqui quodsi, atomorum senserit ex mel. Nam quod posse definitionem no, ex vim magna facilis constituto, eu viris blandit evertitur qui. An quis suas vis, error liberavisse usu an.");
}
