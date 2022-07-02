import { Component } from "react";
import { useParams } from "react-router-dom";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
    state = { loading: true, showModal: false };

    componentDidMount() {
        const { id } = this.props.params;
        fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
            .then(response => response.json())
            .then(({ pets }) => this.setState({ loading: false, pet: pets[0]  }));
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    render() {
        if (this.state.loading) { return <h2>Loading...</h2>; }

        const { pet, showModal } = this.state;
        const { name, breed, description, images, city, state, id } = pet;
        const animal = pet.animal.charAt(0).toUpperCase() + pet.animal.slice(1);

        return (
            <div className="details">
                <Carousel images={ images } />
                <h1>{ name }</h1>
                <h2>{ animal.charAt(0).toUpperCase() + animal.slice(1) } - {  breed } - { city }, { state }</h2>
                <ThemeContext.Consumer>
                    { ([theme]) => (
                        <button
                            style={{ backgroundColor: theme }}
                            onClick={this.toggleModal}
                        >
                            Adopt {name}
                        </button>
                    ) }
                </ThemeContext.Consumer>
                <p>{ description }</p>
                { showModal ? (
                    <Modal>
                        <>
                            <h1>Would you like to adopt { name }?</h1>
                            <div className="buttons">
                                <a href="https://bit.ly/pet-adopt" target="_blank">Yes</a>
                                <button onClick={ this.toggleModal }>No</button>
                            </div>
                        </>
                    </Modal>
                ) : null }
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