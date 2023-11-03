import {
  Box,
  Text,
  Image,
  Button,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Banner1 from "../../../assets/images/banner1.png";
import Loc from "../../../assets/images/location.png";
import axios from "axios";

const CardTransaction = () => {

  
  return (
    <Box>
      <Card className="card" maxW="xs" borderRadius="10px" bgColor="#1E1E1E">
        <CardBody padding="0">
          <Image borderTopRadius="10px" src={Banner1} />
          <Box padding="18px">
            <Box display='flex' flexDirection='column' gap='10px'>
              <Text color="#ffffff" fontSize='16px' fontWeight='600'>Ambyar Concert Yogyakarta 2023</Text>
              <Box display="flex" alignItems="center" gap="10px">
                <Image src={Loc} />
                <Text color="#838383" fontSize='14px' fontWeight='400'>Yogyakarta, Indonesia</Text>
              </Box>
              <Text color="#DB6969" fontSize='14px' fontWeight='400'>Valid untill : 30 Nov 2023 08:00:00</Text>
            </Box>

            <Box bgColor="#353535" w="full" h="2px" margin="32px 0 32px 0" />
            <Box display="flex" justifyContent="center">
              <Button
                w="full"
                variant="outline"
                color="#7ED957"
                colorScheme="#7ED957"
                
              >
                Upload File
              </Button>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};
export default CardTransaction;
