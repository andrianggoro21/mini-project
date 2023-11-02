import { Box, Text, Image, Button, Card, CardBody } from "@chakra-ui/react";
import Loc from "../../../assets/images/location.png";
import Point from "../../../assets/images/point.png";
import Qr from "../../../assets/images/qrcode.png";
import IconSuccess from "../../../assets/images/success.png";
import { useSelector } from "react-redux";

const CardTicket = () => {
  const form = useSelector((state) => state.quantity.ticket);
  return (
    <>
      {form.map((item, index) => (
        <Box>
          <Card maxW="sm" bgColor="#1E1E1E" padding="20px">
            <CardBody>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                gap="12px"
              >
                <Text color="#ffffff" fontSize="16px" fontWeight="600">
                  Ambyar Concert Yogyakarta 2023
                </Text>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  gap="10px"
                >
                  <Box display="flex" alignItems="center" gap="10px">
                    <Text color="#bcbcbc" fontSize="14px">
                      29 Nov 23
                    </Text>
                    <Image src={Point} />
                    <Text color="#bcbcbc" fontSize="14px">
                      08:00:00
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" gap="10px">
                    <Image src={Loc} />
                    <Text color="#bcbcbc" fontSize="14px">
                      Yogyakarta Indonesia
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box bgColor="#353535" w="full" h="2px" margin="18px 0 18px 0" />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="14px"
              >
                <Text color="#ffffff" fontSize="16px" fontWeight="400">
                  Andri Anggoro
                </Text>
                <Text color="#ffffff" fontSize="16px" fontWeight="400">
                  Regular
                </Text>
                <Image src={Qr} />
                <Text color="#ffffff" fontSize="16px" fontWeight="400">
                  IDR 200.000
                </Text>
                <Box
                  fontSize="14px"
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Image src={IconSuccess} />
                  <Text color="#7ED957" fontSize="14px" fontWeight="400">
                    Success Payment
                  </Text>
                </Box>
              </Box>
            </CardBody>
          </Card>
        </Box>
      ))}
    </>
  );
};

export default CardTicket;
