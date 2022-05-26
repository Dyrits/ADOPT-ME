import { createElement } from "react";
import { render } from "react-dom";

import Pet from "./Pet";

const App = () =>
  createElement("div", {}, [
    createElement("h1", {}, "Adopt Me!"),
    createElement(Pet, {
      name: "Luna",

      animal: "Dog",

      breed: "Havanese",
    }),
    createElement(Pet, {
      name: "Pepper",

      animal: "Bird",

      breed: "Cockatiel",
    }),
    createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
render(createElement(App), document.querySelector("#root"));
