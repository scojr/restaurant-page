import "./styles.css";
import { pageLoader } from "./home";

export const docElements = (function () {
  const content = document.querySelector("#content");
  const nav = document.querySelector("nav");
  const buttons = document.querySelectorAll("button");
  return { content, nav, buttons }
})();

pageLoader();