import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, HStack, Heading, Image, Button, IconButton, Flex } from "@chakra-ui/react";
import {IoIosArrowDropleft} from "react-icons/io";
import {MdOutlineArrowBackIos, MdArrowForwardIos} from "react-icons/md"

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Flex justifyContent="flex-end" pr={4} position="absolute" inset={0} alignItems="center">
    <IconButton 
    isRound={true}
    variant='solid'
    background="#242424"
    aria-label='Done'
    fontSize='20px' icon={<MdArrowForwardIos color="white" boxSize={100} size={25} onClick={onClick}/>} />
    </Flex>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Flex justifyContent="flex" overflow="hidden" pl={4} position="absolute" inset={0} alignItems="center">
    <IconButton 
    zIndex={1}
    isRound={true}
    variant='solid'
    background="#242424"
    aria-label='Done'
    fontSize='20px' icon={<MdOutlineArrowBackIos color="white" boxSize={100} size={25} onClick={onClick}/>} />
    </Flex>
  );
}


const Carousel = (props) => {
  const settings = {
    dots:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2100,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  const slides = [
    "./images/banner.jpg",
    "./images/banner.jpg",
    "./images/banner.jpg",
  ];

  return (
    <>
      <Slider {...settings}>
        {slides.map((banner, index) => (
          <Box w="full" key={index}>
            <Image w="full" h="568px" src={banner} />
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
