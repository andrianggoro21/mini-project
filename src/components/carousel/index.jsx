import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, HStack, Heading, Image } from "@chakra-ui/react";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const slides = [
    "./images/banner.jpg",
    "./images/banner.jpg",
    "./images/banner.jpg",
  ];
  return (
    <>
      <Box>
        <Slider {...settings}>
            {slides.map((banner, index) => (
            <Box key={index}>
                <Image src={banner}/>
            </Box>
            ))}
        </Slider>
      </Box>
    </>
  );
};

export default Carousel;
