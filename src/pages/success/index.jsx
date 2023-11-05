import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/pagesTransaction/cardTicket";
import { nanoid } from "nanoid";
import { useState } from "react";


const Success = () => {
  const [code, setCode] = useState();
  localStorage.setItem("qrcode", code)
  const codeForQrCode = () => {
    const resCode = nanoid(10).toUpperCase()
    setCode(resCode);
  };
  return (
    <Box
      maxW="100vw"
      minH="100vh"
      bgColor="#121212"
      padding="100px 24px 100px 24px"
    >
      <CardTicket />
      <Button onClick={codeForQrCode}>Generate</Button>
      <Text color='#ffffff'>{code}</Text>
      
    </Box>
  );
};

export default Success;
