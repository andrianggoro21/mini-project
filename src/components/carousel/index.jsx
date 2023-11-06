import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, HStack, Heading, Image, Button, IconButton, Flex } from "@chakra-ui/react";
import {IoIosArrowDropleft} from "react-icons/io";
import {MdOutlineArrowBackIos, MdArrowForwardIos} from "react-icons/md"
import axios from "axios";

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

  // const slides = [
  //   "./images/banner.jpg",
  //   "./images/banner.jpg",
  //   "./images/banner.jpg",
  // ];

  const [eventImage, setEventImage] = useState([]);
  console.log(eventImage);
  
  const fetchEventImage = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event", {
        // headers: { "Cache-Control": "no-cache" },
      });
      setEventImage(response.data.data);
      console.log(response.data.data);
      // console.log(response.data.data[4].image);
      // console.log(response.data.data[0].tickets[0].price);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEventImage();
  }, []);

  return (
    <>
      <Slider {...settings}>
        {eventImage.map((item, index) => (
          <Box w="full" key={index}>
            <Image w="full" h="568px" src={`${process.env.REACT_APP_IMAGE_URL}/events/${item?.image}`} />
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
