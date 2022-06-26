import { Component } from "react";

class Carousel extends Component {
    state = { active: 0 };

    static defaultProps = {
        images: ["http://pet-images.dev-apis.com/pets/none.jpg"]
    }

    render () {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={ images[active] } alt="Animal"/>
                <div className="carousel-smaller">
                    { images.map((image, index) => (
                        <img
                            src={ image }
                            alt="Animal thumbnail"
                            key={ image }
                            className={ index === active && "active"}
                            onClick={ () => this.setState({ active: index }) }
                        />
                    )) }
                </div>
            </div>
        )
    }
}

export default Carousel;