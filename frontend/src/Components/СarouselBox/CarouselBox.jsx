import React from 'react'

import Carousel from "react-bootstrap/Carousel"
import PropTypes from 'prop-types';
import './CarouselBox.css'

const CarouselBox = ({props, control}) => {
    return (
        
        <Carousel indicators={false} controls={control}>
            {props.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                    />
                </Carousel.Item>
            ))}

        </Carousel>

    );
}


CarouselBox.propTypes = {
    props: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CarouselBox;