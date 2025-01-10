import { bannerConstructor, constructCardGrid } from "./constructors";
import contactBanner from "./images/banner-piazza.jpg";
import contactImage from "./images/contact-cottonbro.jpg";

export function loadContact() {
  const contactGrid = constructCardGrid(3);
  bannerConstructor(contactBanner, "Pizzeria Calvino", "https://web.archive.org/web/20161013040320/http://www.panoramio.com/photo/14366314", "Let's Connect!", "We'd Love to Hear from You.");
  const hours = contactGrid.newCard("Hours", "Sunday\n10:00 AM - 3:00 AM\nMonday\n10:00 AM - 3:00 AM\nTuesday\n10:00 AM - 3:00 AM\nWednesday\n10:00 AM - 3:00 AM\nThursday\n10:00 AM - 3:00 AM\nFriday\n10:00 AM - 5:00 AM\nSaturday\n10:00 AM - 5:00 AM");
  hours.scale(0, 3);

  contactGrid.newCard("Address", "1435 Broadway\nNew York, NY 10018");

  const image = contactGrid.newCard("", "", contactImage, "cottonbro studio", "https://www.pexels.com/photo/person-holding-a-pizza-with-cheese-3944312/");
  image.scale(0, 3);
  contactGrid.newCard("Phone", "(555) 555-5555");
  contactGrid.newCard("Email", "han@hanspizza.com");

}