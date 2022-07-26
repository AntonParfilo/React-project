import React from "react";
import "./slider.module.css"
import {Carousel} from 'react-bootstrap';

const Slider = (props) => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/slider/slide4.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/slider/slide5.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/slider/slide6.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default (
    Slider
)