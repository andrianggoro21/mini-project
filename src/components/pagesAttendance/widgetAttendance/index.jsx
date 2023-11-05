import { Box, Text, Card, CardBody, Image, Button } from "@chakra-ui/react";
import banner from "../../../assets/images/banner1.png";
import Cal from "../../../assets/images/calendar.png";
import Loc from "../../../assets/images/location.png";
import Time from "../../../assets/images/time.png";
import Plus from "../../../assets/images/plus.png";
import Minus from "../../../assets/images/minus.png";
import Ticket1 from "../ticket1";
import Ticket2 from "../ticket2";

const Widget = ({ event, ticket, quantity1, quantity2 }) => {
  return (
    <Box>
      <Text color="#ffffff" fontSize="18px" fontWeight="700">
        Event Attendance
      </Text>
      <Card w="full" margin="20px 0 20px 0" bgColor="#1E1E1E">
        <CardBody>
          <Box display="flex" gap="16px">
            <Box display={{ base: "none", md: "block" }}>
              <Image
                w="300px"
                h="120px"
                borderRadius="10px"
                src={`${process.env.REACT_APP_IMAGE_URL}/events/${event?.image}`}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="10px">
              <Text color="#ffffff" fontSize="16px" fontWeight="700">
                {event?.eventName}
              </Text>
              <Box display="flex" flexDirection="column" gap="6px">
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Cal} />
                  <Text color="#bcbcbc" fontSize="14px">
                    {event?.startDate}
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Time} />
                  <Text color="#bcbcbc" fontSize="14px">
                    {event?.time}
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Loc} />
                  <Text color="#bcbcbc" fontSize="14px">
                    {event?.eventlocation?.locationName}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box bgColor="#353535" w="full" h="2px" margin="32px 0 14px 0" />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w="100px">
              <Text
                color="#bcbcbc"
                fontSize="16px"
                fontWeight="600"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                Ticket Type
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={{ base: "30px", sm: "70px" }}
            >
              <Box w="120px" textAlign="right">
                <Text color="#bcbcbc" fontSize="16px" fontWeight="600">
                  Price
                </Text>
              </Box>
              <Box w="100px" textAlign="right">
                <Text color="#bcbcbc" fontSize="16px" fontWeight="600">
                  Quantity
                </Text>
              </Box>
            </Box>
          </Box>

          {ticket.length == 1 ? (
            <Ticket1
              quantity={quantity1}
              ticketName={ticket[0]?.ticketName}
              price={ticket[0]?.price}
            />
          ) : (
            <Box>
              <Ticket1
                quantity={quantity1}
                ticketName={ticket[0]?.ticketName}
                price={ticket[0]?.price}
              />
              <Ticket2
                quantity={quantity2}
                ticketName={ticket[1]?.ticketName}
                price={ticket[1]?.price}
              />
            </Box>
          )}
        </CardBody>
      </Card>
    </Box>
  );
};
export default Widget;
