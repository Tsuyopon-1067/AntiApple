import React from 'react';
import Image1png from './CarouselImages/1.png';
import Image2png from './CarouselImages/2.png';
import Image3png from './CarouselImages/3.png';
import ImagePrev from './CarouselImages/arrowPrev.png';
import ImageNext from './CarouselImages/arrowNext.png';
import {Image} from '@chakra-ui/react';

export const Image1 = () => {
    return (
      <Image src={Image1png} />
    );
};
export const Image2 = () => {
    return (
      <Image src={Image2png} />
    );
};
export const Image3 = () => {
    return (
      <Image src={Image3png} />
    );
};
export const ArrowPrev = () => {
    return (
      <Image src={ImagePrev} />
    );
};
export const ArrowNext = () => {
    return (
      <Image src={ImageNext} />
    );
};