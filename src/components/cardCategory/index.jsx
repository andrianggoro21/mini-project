import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Avatar,
  Box,
  Stack,
  Image,
  Flex,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const CardCategory = () => {
  const settingsMobile = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const settingsDesktop = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isLG] = useMediaQuery("(min-width: 62em)");
  const [isBase] = useMediaQuery("(min-width: 0)");

  const categoryCard = [
    {
      name_category: "Music",
      path: "./images/category/music_category.png",
    },
    {
      name_category: "Food and Drink",
      path: "./images/category/food_and_drink_category.png",
    },
    {
      name_category: "Culture",
      path: "./images/category/culture_category.png",
    },
    {
      name_category: "Art",
      path: "./images/category/art_category.png",
    },
    {
      name_category: "Holiday",
      path: "./images/category/holiday_category.png",
    },
    {
      name_category: "Attraction",
      path: "./images/category/attraction_category.png",
    },
    {
      name_category: "Sport",
      path: "./images/category/culture_category.png",
    },
    {
      name_category: "Horror",
      path: "./images/category/art_category.png",
    },
  ];
  return (
    <>
        <Slider {...settings}>
          {categoryCard.map((item, index) => (
            <Box p="1em 0em 1em 0em">
              <Flex
                justifyContent="center"
                key={index}
                rounded="50%"
                overflow="hidden"
              >
                <Image w="172px" h="172px" src={item.path} />
              </Flex>
              <Text textAlign="center" fontWeight="medium" color="white">
                {item.name_category}
              </Text>
            </Box>
          ))}
        </Slider>
    </>
  );
};

export default CardCategory;
