import React from 'react';
import Styles from './Carousel.module.css';
import Image1 from './CarouselImages/1.png';
import Image2 from './CarouselImages/2.png';
import Image3 from './CarouselImages/3.png';
import Image4 from './CarouselImages/4.png';
import {
    Button,
    Image,
} from '@chakra-ui/react';

export default function Carousel() {

    return (
        <React.Fragment>
            <div class='carousel'>
                <Image src={Image1} />
                <Image src={Image2} />
                <Image src={Image3} />
                <Image src={Image4} />
            </div>
            <div class='btns'>
                <Button class='btn-prev' colorScheme='teal'>Text</Button>
                <Button class='btn-next' colorScheme='teal'>Text</Button>
            </div>
        </React.Fragment>
    )
}
