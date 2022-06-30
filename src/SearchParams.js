import { useState, useEffect, useContext } from "react";

import useBreeds from "./useBreeds";
import Pets from "./Pets";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState(String());
    const [animal, setAnimal] = useState(String());
    const [breed, setBreed] = useState(String());
    const [pets, setPets] = useState([]);
    const [breeds, status] = useBreeds(animal);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        requestPets().then(() => { console.info("Pets have been loaded."); });
    }, []);

    async function requestPets() {
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const { pets } = await response.json();
        setPets(pets);
    }

    const handle = {
        submit($event) {
            $event.preventDefault();
            requestPets().then(() => { console.info("Pets have been loaded."); });
        },
        selectAnimal($event) {
            setAnimal($event.target.value);
            setBreed(String());
        },
        selectBreed($event) { setBreed($event.target.value); }
    }

    return (
        <div className="search-params">
            <form onSubmit= { handle.submit }>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" placeholder="Location" value={location} onChange={ ({ target }) => setLocation(target.value) } />
                <label htmlFor="animal">Animal:</label>
                <select
                    id="animal"
                    value={ animal }
                    onChange={ handle.selectAnimal }
                    onBlur={ handle.selectAnimal }
                >
                    <option />
                    {ANIMALS.map(animal => <option key={animal} value={animal}>{animal.charAt(0).toUpperCase() + animal.slice(1)}</option>)}
                </select>
                <label htmlFor="breed">Breed:</label>
                <select
                    id="breed"
                    value={ breed }
                    onChange={ handle.selectBreed }
                    onBlur={ handle.selectBreed }
                    disabled={ !animal }
                >
                    <option />
                    { breeds.map(breed => <option key={ breed } value={ breed }>{ breed }</option>) }
                </select>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Pets pets={ pets } />
        </div>
    );
}

export default SearchParams;