import { Box, FormControl, Input, Button } from '@chakra-ui/react'

const FromReferral = () => {
  return (
    <Box>
      <form>
        <FormControl>
          <Box display="flex" alignItems="center" gap="14px">
            <Input
              placeholder="Enter referral code"
              color="#ffffff"
              bgColor="#262626"
              border="none"
              _placeholder={{ color: "#585454" }}
              focusBorderColor="#262626"
            />
            <Button
              bgColor="#3C891C"
              color="#ffffff"
              fontSize="14px"
              type="submit"
            >
              Apply
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default FromReferral;
