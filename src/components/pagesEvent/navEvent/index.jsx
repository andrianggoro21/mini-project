import { Box, Text } from '@chakra-ui/react';

const NavEvent = () => {
    return ( 
        <Box color='#838383' fontWeight='700' fontSize='14px' display='flex' alignItems='center' gap='16px'>
            <Text>Overview</Text>
            <Text>Description</Text>
            <Text>Highlight</Text>
            <Text>Packages</Text>
            <Text>Included</Text>
            {/* <Text>More info</Text> */}
        </Box>
    )

}
export default NavEvent;