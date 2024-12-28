import { docElements } from ".";

const menuEntries = [
  { name: "Classic Margherita Pizza", description: "A thin, crispy crust topped with San Marzano tomato sauce, fresh mozzarella, and basil leaves, drizzled with olive oil." },
  { name: "Brooklyn Meat Lover's Pie", description: "Packed with pepperoni, sausage, ham, and bacon for a hearty, savory experience." },
  { name: "Pepperoni Supreme", description: "Loaded with premium pepperoni slices, gooey mozzarella, and a hint of oregano, baked to perfection." },
  { name: "Veggie Paradise", description: "A colorful mix of bell peppers, onions, mushrooms, spinach, and olives on a tomato and mozzarella base." },
  { name: "Garlic Knots", description: "Golden-baked dough knots brushed with garlic butter, sprinkled with Parmesan, and served with marinara sauce." },
  { name: "Chicken Parm Hero", description: "Crispy breaded chicken cutlet, marinara sauce, and melted mozzarella in a toasted hero roll." },
  { name: "Spaghetti and Meatballs", description: "Classic spaghetti in a rich marinara sauce, served with hand-rolled meatballs and Parmesan." },
  { name: "Fettuccine Alfredo", description: "Smooth, creamy Alfredo sauce tossed with tender fettuccine and finished with fresh parsley." },
  { name: "New York Cheesecake", description: "Rich, creamy cheesecake with a graham cracker crust, topped with a dollop of whipped cream." },
];

export function loadMenu() {
  const header = document.createElement("h1");
  const menuList = document.createElement("dl");
  header.textContent = "Menu";
  docElements.content.appendChild(header);
  for (const entry of menuEntries) {
    const dish = document.createElement("dt");
    dish.textContent = entry.name;
    const description = document.createElement("dd");
    description.textContent = entry.description;
    menuList.appendChild(dish);
    menuList.appendChild(description);
  }
  docElements.content.appendChild(menuList);
}