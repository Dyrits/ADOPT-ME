import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";

import SearchParams from "./SearchParams";
import Details from "./Details";
import WrappedDetails from "./Details";

const App = () =>
    <StrictMode>
        <BrowserRouter>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
                <Route path="/details/:id" element={ <WrappedDetails /> } />
                <Route path="/" element={ <SearchParams /> } />
            </Routes>
        </BrowserRouter>
    </StrictMode>
;

render(<App />, document.querySelector("#root"));
