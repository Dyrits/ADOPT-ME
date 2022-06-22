import Pet from "./Pet";

const Results = ({ pets }) => (
    <div>
        { pets.length ?
            pets.map(({ id, name, animal, breed, images, city, state }) =>
                <Pet
                    key={ id }
                    id={ id }
                    name={ name }
                    animal={ animal }
                    breed={ breed }
                    images={ images }
                    location={`${city}, ${state}`}
                />
            ) :
            <p>No pets found.</p> }
    </div>
);

export default Results;