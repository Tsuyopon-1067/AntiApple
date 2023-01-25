import React, { Component } from 'react';
import {Image1, Image2, Image3, ArrowPrev, ArrowNext} from './CarouselImages';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick-theme.css';

import Styles from './Carousel.module.css';
import { ClassNames } from '@emotion/react';

export default class Carousel extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <button className={Styles.arrowPrev}><ArrowPrev /></button>,
        nextArrow: <button className={Styles.arrowNext}><ArrowNext /></button>
    };
    return (
      <div className={Styles.carouselDiv}>
        <Slider {...settings}>
            <div >
                <Image1 />
            </div>
            <div>
                <Image2 />
            </div>
            <div>
                <Image3 />
            </div>
        </Slider>
      </div>
    );
  }
}