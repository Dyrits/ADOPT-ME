import { Component } from "react";
import { useParams } from "react-router-dom";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
    state = { loading: true };

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

        return (
            <div className="details">
                <Carousel images={ images } />
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
    return (
        <ErrorBoundary>
            <Details params={ params } />
        </ErrorBoundary>
    );
};

export default WrappedDetails;