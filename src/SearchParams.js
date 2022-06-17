import { useState } from "react";

const ANIMALS = ["Bird", "Cat", "Dog", "Rabbit", "Reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState(String());
    const [breed, setBreed] = useState(String());
    const breeds = ["Poodles", "Bichon"];

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
                    {ANIMALS.map(animal => <option key={animal} value={animal}>{animal}</option>)}
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
        </div>
    );
}

export default SearchParams;