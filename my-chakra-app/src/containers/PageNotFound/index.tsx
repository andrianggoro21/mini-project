import React from 'react'
import { Box, Text, Heading, Button, Flex, Image } from '@chakra-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../../components'
import Container from '../../components/Container'
import images from '../../theme/images'

const PageNotFound: React.FC<RouteComponentProps> = (props) => {
  return (
    <Box mb={20}>
      <Header />
      <Box as="section" pt={40} pb={24}>
        <Container>
          <Box maxW="xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" fontWeight="semibold" fontFamily="fonts.body">
              four-oh-four
            </Heading>

            <Flex alignItems="center" justifyContent="center" padding={20}>
              <Image src={images.fourohfour} width="50%" />
            </Flex>
            <Text opacity={0.7} fontSize="xl" mt="6">
              It seems the page you're looking for does not exist!
            </Text>

            <Box mt="6">
              <Button onClick={() => props.history.push('/')} size="lg" as="a" variantColor="teal">
                Take me home!
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default PageNotFound
