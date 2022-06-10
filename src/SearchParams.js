import { useState } from "react";

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" placeholder="Location" value={location} onChange={ ({ target }) => setLocation(target.value) } />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;