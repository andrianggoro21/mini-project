import { Box, Image } from '@chakra-ui/react';
// import Banner1 from '../../../assets/images/banner1.png';

const BannerEvent = ({banner}) => {
    return(
        <Box className='bannerImg' display='flex' justifyContent='center'>
            <Image w='full' h='700px' borderRadius='10px' src={`${process.env.REACT_APP_IMAGE_URL}/events/${banner}`}/>
        </Box>

    )

}
export default BannerEvent;