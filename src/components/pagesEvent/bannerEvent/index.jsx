import { Box, Image } from '@chakra-ui/react';
import Banner1 from '../../../assets/images/banner1.png';

const BannerEvent = () => {
    return(
        <Box className='bannerImg' display='flex' justifyContent='center'>
            <Image w='full' src={Banner1}/>
        </Box>

    )

}
export default BannerEvent;