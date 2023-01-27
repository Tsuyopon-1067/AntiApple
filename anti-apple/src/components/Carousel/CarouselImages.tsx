import React from "react";
import Image1png from "./1.png";
import Image2png from "./2.png";
import Image3png from "./3.png";
import ImagePrev from "./arrowPrev.png";
import ImageNext from "./arrowNext.png";
import { Image } from "@chakra-ui/react";
import {Link} from "react-router-dom"

export const Image1 = () => {
  return <Link to = "/content/simulation"><Image borderRadius="15px" src={Image1png} /></Link>;
};
export const Image2 = () => {
  return <Link to = "/about"><Image borderRadius="15px" src={Image2png} /></Link>;
};
export const Image3 = () => {
  return <Link to = "pros_cons"><Image borderRadius="15px" src={Image3png} /></Link>;
};
export const ArrowPrev = () => {
  return <Image src={ImagePrev} />;
};
export const ArrowNext = () => {
  return <Image src={ImageNext} />;
};
