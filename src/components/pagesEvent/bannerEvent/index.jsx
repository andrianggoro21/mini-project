import { Box, Image } from '@chakra-ui/react';
// import Banner1 from '../../../assets/images/banner1.png';

const BannerEvent = ({banner}) => {
    return(
        <Box className='bannerImg' display='flex' justifyContent='center'>
            <Image w='full' borderRadius='10px' src={banner}/>
        </Box>

    )

}
export default BannerEvent;