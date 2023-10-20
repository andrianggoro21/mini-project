import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const FormAttendance = () => {
  return (
    <Box>
      <Text color="#ffffff" fontSize="18px" fontWeight="700">
        Personal Details
      </Text>
      <Box
        padding="24px"
        borderRadius="10px"
        margin="20px 0 20px 0"
        bgColor="#1E1E1E"
      >
        <form>
          <FormControl isRequired>
            <Box display="flex" flexDirection="column" gap="32px">
              <Box>
                <FormLabel color="#bcbcbc">Full Name</FormLabel>
                <Input
                  placeholder="Full Name"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                />
              </Box>
              <Box>
                <FormLabel color="#bcbcbc">Email</FormLabel>
                <Input
                  placeholder="Email"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                />
              </Box>
              <Box>
                <FormLabel color="#bcbcbc">Phone Number</FormLabel>
                <Input
                  placeholder="Phone Number"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                />
              </Box>
            </Box>
          </FormControl>
        </form>
      </Box>

      <Box
        padding="24px"
        borderRadius="10px"
        margin="20px 0 20px 0"
        bgColor="#1E1E1E"
      >
        <form>
          <FormControl isRequired>
            <Box display="flex" flexDirection="column" gap="32px">
              <Box>
                <FormLabel color="#bcbcbc">Full Name</FormLabel>
                <Input
                  placeholder="Full Name"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                />
              </Box>
              <Box>
                <FormLabel color="#bcbcbc">Email</FormLabel>
                <Input
                  placeholder="Email"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                />
              </Box>
              <Box>
                <FormLabel color="#bcbcbc">Phone Number</FormLabel>
                <Input
                  placeholder="Phone Number"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                />
              </Box>
            </Box>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
export default FormAttendance;
