import { Box, Text } from '@chakra-ui/react';
import CardEvent from '../cardEvent';

const VoucherEvent = () => {
    return (
        <Box className='voucherEvent' >
            <Box display='flex' alignItems='center' justifyContent='space-between' padding='32px 0 16px 0'>
                <Text fontSize='18px' fontWeight='700' color='#ffffff'>Voucher</Text>
                <Text fontSize='14px' fontWeight='700' color='#7ED957'>See more</Text>
            </Box>
            <Box><CardEvent/></Box>

        </Box>
    )

}
export default VoucherEvent;