import { useState, useEffect } from "react";
import useBreeds from "./useBreeds";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState(String());
    const [animal, setAnimal] = useState(String());
    const [breed, setBreed] = useState(String());
    const [pets, setPets] = useState([]);
    const [breeds, status] = useBreeds(animal);

    useEffect(() => {
        requestPets().then(() => { console.info("Pets have been loaded."); });
    }, []);

    async function requestPets() {
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const { pets } = await response.json();
        setPets(pets);
    }

    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" placeholder="Location" value={location} onChange={ ({ target }) => setLocation(target.value) } />
                <button>Submit</button>
                <label htmlFor="animal">Animal:</label>
                <select
                    id="animal"
                    value={animal}
                    onChange={ ({ target }) => {
                        setAnimal(target.value);
                        setBreed(String());
                    }}>
                    onBlur={ ({ target }) => {
                        setAnimal(target.value);
                        setBreed(String());
                    }}
                >
                    <option />
                    {ANIMALS.map(animal => <option key={animal} value={animal}>{animal.charAt(0).toUpperCase() + animal.slice(1)}</option>)}
                </select>
                <label htmlFor="breed">Breed:</label>
                <select
                    id="breed"
                    value={breed}
                    onChange={ ({ target }) => {
                        setBreed(target.value);
                    }}>
                    onBlur={ ({ target }) => {
                        setBreed(target.value);
                    }}
                    >
                    <option />
                    {breeds.map(breed => <option key={breed} value={breed}>{breed}</option>)}
                </select>
            </form>
            { pets.map(({ id, name, animal, breed }) => <Pet key={id} name={name} animal={animal} breed={breed} />) }
        </div>
    );
}

export default SearchParams;