import React, { useEffect, useState } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import {MdOutlineArrowBackIos, MdArrowForwardIos} from "react-icons/md"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Flex justifyContent="flex-end" pr={0} position="absolute" inset={0} alignItems="center">
    <IconButton 
    isRound={true}
    variant='solid'
    bg="whiteAlpha.500" backdropFilter="auto" backdropBlur="6px"
    aria-label='Done'
    fontSize='20px' icon={<MdArrowForwardIos backdropFilter="auto" backdropBlur="6px" color="white" boxSize={100} size={25} onClick={onClick}/>} />
    </Flex>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Flex justifyContent="flex" overflow="hidden" pl={0} position="absolute" inset={0} alignItems="center">
    <IconButton 
    zIndex={1}
    isRound={true}
    variant='solid'
    bg="whiteAlpha.500" backdropFilter="auto" backdropBlur="6px"
    aria-label='Done'
    fontSize='20px' icon={<MdOutlineArrowBackIos backdropFilter="auto" backdropBlur="6px" color="white" boxSize={100} size={25} onClick={onClick}/>} />
    </Flex>
  );
}


const CardCategory = () => {
  const settings = {
    className: "center",
      centerMode: true,
      centerPadding: "40px",
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      // {
      //   breakpoint: 1248,
      //   settings: {
      //     centerPadding: "0px",
      //     slidesToShow: 6,
      //     slidesToScroll: 1,
      //     infinite: true,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "30px",
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          centerPadding: "20px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: "10px",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          centerPadding: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/list-category", {
        // headers: { "Cache-Control": "no-cache" },
      });
      setCategory(response.data.data);

      // console.log(response.data.data[4].image);
      // console.log(response.data.data[0].tickets[0].price);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategory = (e) => {
    navigate("/search");
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
        <Slider {...settings}>
          {category.map((item, index) => (
            <VStack justifyContent="space-between" p="1em 0em 1em 0em" w="full">
              <Flex
                justifyContent="center"
                key={index}
                // rounded="50%"
                w="full"
                h="full"
              >
                <Image rounded="100%" w={{base: "100px", lg: "172px"}} h={{base: "100px", lg: "172px"}} onClick={() => handleCategory()} src={`${process.env.REACT_APP_IMAGE_URL}/category/${item?.image}`} />
              </Flex>
              <Text textAlign="center" fontWeight="medium" color="white">
                {item.categoryName}
              </Text>
            </VStack>
          ))}
        </Slider>
    </>
  );
};

export default CardCategory;
