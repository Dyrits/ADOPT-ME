import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";

import SearchParams from "./SearchParams";
import WrappedDetails from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
    const theme = useState("darkblue");
    return (
        <StrictMode>
            <ThemeContext.Provider value={ theme }>
                <BrowserRouter>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={ <WrappedDetails /> } />
                        <Route path="/" element={ <SearchParams /> } />
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </StrictMode>
    );
};


render(<App />, document.querySelector("#root"));
