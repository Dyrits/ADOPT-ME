import { createElement } from "react";

const Pet = ({ name, animal, breed }) =>
    createElement("div", {}, [
        createElement("h1", {}, name),
        createElement("h2", {}, animal),

        createElement("h2", {}, breed),
    ]);

export default Pet;