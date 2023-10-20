import {
  Box,
  Image,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Info from "../../../assets/images/info.png";

const Highlight = () => {
  return (
    <Box color="#ffffff" fontSize="14px" fontWeight="400" textAlign="justify">
      <Text
        fontSize="18px"
        fontWeight="700"
        color="#ffffff"
        marginBottom="16px"
      >
        Highlight
      </Text>
      <UnorderedList spacing={3} letterSpacing=".6px">
        <ListItem>
          Watch Ambyar Concert Yogyakarta 2023 featuring Denny Caknan, Guyon
          Waton, Gilga Sahid, NDX A.K.A, Happy Asmara, Yenni Inka, Aftershine
          and more!
        </ListItem>
        <ListItem>
          The concert will be held on October 1 - 4, 2023, at Prambanan Temple,
          Yogyakarta, Indonesia.
        </ListItem>
        <ListItem>
          Get 15% discount with BCA Credit Card, Debit BCA Mastercard, and BCA
          Virtual Account with promo code 123BCA
        </ListItem>
        <ListItem>Maximum 4 tickets in 1 transaction.</ListItem>
      </UnorderedList>
      <Box bgColor="#1E1E1E" marginTop="16px" padding="16px" color="#ffffff" fontSize="14px" fontWeight="400" textAlign="justify" borderRadius='10px'>
        <Box display="flex" alignItems="center" gap="10px" marginBottom='16px'>
          <Image src={Info} />
          <Text fontSize="16px" fontWeight="600" color="#ffffff">
            Important Info
          </Text>
        </Box>
        <UnorderedList spacing={3} letterSpacing=".6px" >
          <ListItem>
            It is recommended not to bring children under the age of 7.
          </ListItem>
          <ListItem>
            It is forbidden to bring food or drink from outside.
          </ListItem>
          <ListItem>
            Understand and agree to all terms and conditions before buying and
            using tickets.
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
export default Highlight;
