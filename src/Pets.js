import Pet from "./Pet";

const Pets = ({ pets }) => (
    <div>
        { pets.length ?
            pets.map(({ id, name, animal, breed, images, city, state }) =>
                <Pet
                    key={ id }
                    id={ id }
                    name={ name }
                    animal={ animal.charAt(0).toUpperCase() + animal.slice(1) }
                    breed={ breed }
                    images={ images }
                    location={`${city}, ${state}`}
                />
            ) :
            <p>No pets found.</p> }
    </div>
);

export default Pets;