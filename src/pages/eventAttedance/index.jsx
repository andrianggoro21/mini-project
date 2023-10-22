
import { Box } from "@chakra-ui/react";
import Widget from "../../components/pagesAttendance/widgetAttendance";
import FormAttendance from "../../components/pagesAttendance/formAttendance";
import DetailAttendance from "../../components/pagesAttendance/detailAttendance";
import Footer from "../../components/footer";

const Attedance = () => {
  

  return (
    <Box>
      <Box maxW='100vw' minH='100vh' padding='100px 24px 100px 24px' bgColor="#121212" >
        <Box display='flex' justifyContent='center' gap={{base:"24px", xl: "48px"}} flexDirection={{base: "column", xl: "row"}}>
          <Box display='flex' flexDirection='column' gap='24px'>
            <Widget />
            <FormAttendance/>
          </Box>
          <Box>
            <DetailAttendance/>
            <Box w='350px' display={{base: "none", xl: "block"}}/>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};
export default Attedance;
