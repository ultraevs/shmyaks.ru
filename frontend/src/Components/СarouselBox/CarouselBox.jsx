import React from 'react'

import Carousel from "react-bootstrap/Carousel"
import gallery_1 from "../../assets/img/gallery_1.jpg";

import './CarouselBox.css'

const CarouselBox = () => {
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
                <img
                    src={gallery_1}
                    alt="Тендерлайн"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={gallery_1}
                    alt="Тендерлайн"
                />
            </Carousel.Item>

        </Carousel>

    );
}

export default CarouselBox;