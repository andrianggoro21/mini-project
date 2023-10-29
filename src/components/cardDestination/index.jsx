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
      {/* <Slider {...settings}> */}
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
        // p={6}
        gap={3}
      >
        {destionation_card.map((item, index) => (
          <Flex
            alignItems="flex-end"
            overflow="hidden"
            // position="relative"
            // justifyContent="center"
            // alignItems="center"
            rounded=".5em"
            
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // borderRadius=".5em"
            backgroundImage={item.path}
            // w={{ base: "150px", md: "150px", lg: "full" }}
            w="100%"
            // h="150px"
            h={{base:"93px", md:"150px", lg: "207px" }}
          >
            <HStack
            w="full"
            //   w={{ base: "93px", md: "207px", lg: "full" }}
              h={{ base: "24px", lg: "56px" }}
            //   overflow="auto"
              background="whiteAlpha.400"
              justifyContent="center"
            //   position=""
            // display="inline"
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
//         <Card maxW='sm' backgroundImage={item.path} w="207px" h="207px" 
//         backgroundPosition="center"
//         backgroundRepeat="no-repeat"
//         backgroundSize="cover"
//         >
//   <CardBody>
//     {/* <Image
//       src={item.path}
//       alt='Green double couch with wooden legs'
//       borderRadius='lg'
//     /> */}
//     {/* <Stack mt='6' spacing='3'>
//       <Heading size='md'>Living room Sofa</Heading>
//       <Text>
//         This sofa is perfect for modern tropical spaces, baroque inspired
//         spaces, earthy toned spaces and for people who love a chic design with a
//         sprinkle of vintage design.
//       </Text>
//       <Text color='blue.600' fontSize='2xl'>
//         $450
//       </Text>
//     </Stack> */}
//   </CardBody>
//   <Divider />
//   <CardFooter backdropBlur={10} background="whiteAlpha.900">
//     <Text>
//     {item.destination_name}
//     </Text>
//   </CardFooter>
// </Card>
        ))}
      </Box>
      {/* </Slider> */}
    </>
  );
};

export default CardDestination;
