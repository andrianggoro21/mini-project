import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";

const CardEvent = () => {
  return (
    <Card bgColor='#1E1E1E' w="300px" h="150px" padding='16px' gap='16px'>
      <CardHeader padding='0'>
        <Text fontSize='16px' color='#FFFFFF' fontWeight='600'>Discount 10%</Text>
      </CardHeader>
      <CardBody padding='0'>
        <Text fontSize='16px' color='#8A8282' fontWeight='400'>Valid until 30 November 2023</Text>
      </CardBody>
      <CardFooter justifyContent="end" padding='0'>
        <Button size='sm' variant='outline' color='#7ED957' colorScheme='#7ED957'>Claim</Button>
      </CardFooter>
    </Card>
  );
};
export default CardEvent;
