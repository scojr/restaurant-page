import { docElements } from ".";
import margherita from "./images/margherita.jpg";
import spaghetti from "./images/spaghetti.jpg";
import cheesecake from "./images/cheesecake.jpg";
import tomatoBanner from "./images/banner-kadher.jpg";
import { bannerConstructor, constructCardGrid } from "./constructors";

const menuEntries = [
  { name: "Classic Margherita Pizza", description: "A thin, crispy crust topped with San Marzano tomato sauce, fresh mozzarella, and basil leaves, drizzled with olive oil.", img: margherita, by: "Katherine Lynch", source: "https://flickr.com/photos/floridadine/6474472149/" },
  { name: "Brooklyn Meat Lover's Pie", description: "Packed with pepperoni, sausage, ham, and bacon for a hearty, savory experience." },
  { name: "Pepperoni Supreme", description: "Loaded with premium pepperoni slices, gooey mozzarella, and a hint of oregano, baked to perfection." },
  { name: "Veggie Paradise", description: "A colorful mix of bell peppers, onions, mushrooms, spinach, and olives on a tomato and mozzarella base." },
  { name: "Spaghetti and Meatballs", description: "Classic spaghetti in a rich marinara sauce, served with hand-rolled meatballs and Parmesan.", img: spaghetti, by: "James/powerplantop", source: "https://www.flickr.com/photos/40726522@N02/14974952510" },
  { name: "Garlic Knots", description: "Golden-baked dough knots brushed with garlic butter, sprinkled with Parmesan, and served with marinara sauce." },
  { name: "Chicken Parm Hero", description: "Crispy breaded chicken cutlet, marinara sauce, and melted mozzarella in a toasted hero roll." },
  { name: "New York Cheesecake", description: "Rich, creamy cheesecake with a graham cracker crust, topped with a dollop of whipped cream.", img: cheesecake, by: "sabotrax", source: "https://flickr.com/photos/sabotrax/485123910/" },
  { name: "Fettuccine Alfredo", description: "Smooth, creamy Alfredo sauce tossed with tender fettuccine and finished with fresh parsley." },
  { name: "Classic Cheese Calzone", description: "Golden-baked dough stuffed with ricotta, mozzarella, and Parmesan, served with a side of warm marinara for dipping.." },
  { name: "Cannoli Duo", description: "Crispy pastry shells filled with sweet ricotta cream and chocolate chips, finished with a sprinkle of powdered sugar." },
  { name: "Chocolate Lava Cake", description: "A decadent chocolate cake with a molten center, served warm with a scoop of vanilla gelato." },
];

export function loadMenu() {
  bannerConstructor(tomatoBanner, "Abdul Kadher Akib", "https://www.pexels.com/photo/close-up-photo-of-red-tomatoes-11463629/", "Made Fresh, Made for You.", "From classic favorites to signature creations, our menu has it all.");
  const menuGrid = constructCardGrid(3);
  for (const entry of menuEntries) {
    const menuEntryCard = menuGrid.newCard(entry.name, entry.description, entry.img, entry.by, entry.source);
    if (entry.img) {
      menuEntryCard.scale(0, 2)
    }
  }
}