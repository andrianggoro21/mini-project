import React from 'react'
import { Box, Text, Heading, Button, Flex, Image, Code } from '@chakra-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Logo } from '../../components'
import Container from '../../components/Container'
import images from '../../theme/images'

const GetStarted: React.FC<RouteComponentProps> = (props) => {
  return (
    <Box mb={20}>
      <Header />
      <Box as="section" pt={40} pb={24}>
        <Container>
          <Box maxW="xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" fontWeight="semibold" fontFamily="fonts.body">
              Get Started
            </Heading>

            <Flex alignItems="center" justifyContent="center" padding={20}>
              <Image src={images.underConstruction} width="50%" />
            </Flex>
            <Text opacity={0.7} fontSize="xl" mt="6">
              Edit <Code>src/containers/GetStarted/index.tsx</Code> and save to reload.
            </Text>
            <Box mt="6">
              <Button
                onClick={() => window.open('https://chakra-ui.com/getting-started')}
                size="lg"
                as="a"
                variantColor="teal"
                leftIcon={Logo}
              >
                Docs
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default GetStarted
