import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  HStack,
  Flex,
  Image,
  Divider,
  ButtonGroup
} from "@chakra-ui/react";

const CardDestination = () => {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const destionation_card = [
    {
      destination_name: "TURKEY",
      path: "./images/destination/turkey.png",
    },
    {
      destination_name: "U.K.",
      path: "./images/destination/uk.png",
    },
    {
      destination_name: "SINGAPORE",
      path: "./images/destination/singapore.png",
    },
    {
      destination_name: "JAPAN",
      path: "./images/destination/japan.png",
    },
    {
      destination_name: "SOUTH OF KOREA",
      path: "./images/destination/south_of_korea.png",
    },
    {
      destination_name: "INDIA",
      path: "./images/destination/india.png",
    },
  ];
  return (
    <>
      <Box
        pb="2em"
        w="full"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={3}
      >
        {destionation_card.map((item, index) => (
          <Flex
            alignItems="flex-end"
            overflow="hidden"
            rounded=".5em"
            
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={item.path}
            w="100%"
            h={{base:"93px", md:"150px", lg: "207px" }}
          >
            <HStack
            w="full"
              h={{ base: "24px", lg: "56px" }}
              background="whiteAlpha.400"
              justifyContent="center"
              alignItems="center"
              
            >
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: "10px", lg: "18px" }}
                color="white"
              >
                {item.destination_name}
              </Text>
            </HStack>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default CardDestination;
