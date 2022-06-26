import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            pet: {}
        };
    }

    componentDidMount() {
        const { id } = this.props.params;
        fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
            .then(response => response.json())
            .then(({ pets }) => this.setState({ loading: false, pet: pets[0]  }));
    }

    render() {
        if (this.state.loading) { return <h2>Loading...</h2>; }

        const { pet } = this.state;
        const { name, breed, description, images, city, state, id } = pet;
        const animal = pet.animal.charAt(0).toUpperCase() + pet.animal.slice(1);
        let hero = images[0] || "http://pet-images.dev-apis.com/pets/none.jpg";

        return (
            <div className="details">
                <h1>{ name }</h1>
                <h2>{ animal.charAt(0).toUpperCase() + animal.slice(1) } - {  breed } - { city }, { state }</h2>
                <button>Adopt { name }</button>
                <p>{ description }</p>
            </div>
        );
    }
}

const WrappedDetails = () => {
    const params = useParams();
    return <Details params={ params } />
};

export default WrappedDetails;