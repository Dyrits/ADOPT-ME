import { createContext } from "react";

const ThemeContext = createContext([String(), () => {}]);

export default ThemeContext;