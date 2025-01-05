import { bannerConstructor, cardContainerConstructor } from "./constructors";
import contactBanner from "./images/banner-piazza.jpg";

export function loadContact() {
  const contactCardConstructor = cardContainerConstructor(2);
  bannerConstructor(contactBanner, "Pizzeria Calvino", "https://web.archive.org/web/20161013040320/http://www.panoramio.com/photo/14366314", "Let's Connect!", "We’d Love to Hear from You.");
  contactCardConstructor("Hans Pizzeria", "Welcome to Hans Pizzeria, Manhattan’s slice of heaven! Nestled in the heart of New York City, our pizzeria has been proudly serving the community with authentic, mouthwatering pizza and Italian classics since 2004.");
  contactCardConstructor("Lorem ipsum dolor", "Lorem ipsum dolor sit amet, est apeirian mandamus in. No per sale pericula necessitatibus, an ferri delectus pri. Labores blandit cum ut, his cu atqui quodsi, atomorum senserit ex mel. Nam quod posse definitionem no, ex vim magna facilis constituto, eu viris blandit evertitur qui. An quis suas vis, error liberavisse usu an.");
}