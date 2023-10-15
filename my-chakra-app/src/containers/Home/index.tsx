import React from 'react'
import { Box, Link, Text, Heading, Button, Divider, Grid, Flex, Stack } from '@chakra-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../../components'
import Container from '../../components/Container'
import { GitHub, Twitter, Mail, Terminal, Zap, Link2 } from 'react-feather'

type FeatureProps = {
  title: string
  icon: any
  children: string
}

const Feature = ({ title, icon, children, ...props }: FeatureProps) => {
  return (
    <Box {...props}>
      <Flex rounded="full" size={12} bg="teal.500" align="center" justify="center">
        <Box size={6} color="white" as={icon} />
      </Flex>
      <Heading as="h2" size="md" fontWeight="semibold" mt="1em" mb="0.5em" fontFamily="fonts.body">
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
  )
}

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <Box mb={20}>
      <Header />
      <Box as="section" pt={40} pb={24}>
        <Container>
          <Box maxW="xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" fontWeight="semibold" fontFamily="fonts.body">
              Build accessible React apps & websites
              <Box as="span" color="teal.500">
                {' '}
                with speed
              </Box>
            </Heading>

            <Text opacity={0.7} fontSize="xl" mt="6">
              This CRA templates gives you everything you need to get started developing a React
              application with Chakra UI, including navigation, a few sample screens, cool icons and
              linting config.
            </Text>

            <Box mt="6">
              <Button
                onClick={() => props.history.push('/getting-started')}
                size="lg"
                as="a"
                variantColor="teal"
              >
                Get Started
              </Button>
              <Button
                as="a"
                size="lg"
                ml={4}
                onClick={() =>
                  window.open('https://github.com/nunsie/cra-template-chakra', '_blank')
                }
                leftIcon={(props) => <GitHub size="1.5em" {...props} />}
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider my={16} />

      <Container>
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={10}
          px={{ md: 12 }}
        >
          <Feature icon={Zap} title="Chakra UI">
            Chakra UI is a simple, modular and accessible component library that gives you all the
            building blocks you need to build your React applications.
          </Feature>
          <Feature icon={Link2} title="Navigation">
            React Router is a collection of navigational components that compose declaratively with
            your application.
          </Feature>
          <Feature icon={Terminal} title="Tools">
            Comes with a few additional handy tools and components, along with the configuration for
            them.
          </Feature>
        </Grid>
      </Container>

      <Divider my={16} />

      <Box as="footer" mt={12} textAlign="center">
        <Text fontSize="sm">
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>
          by{' '}
          <Link isExternal href="https://nusrath.com">
            Nusrath Khan
          </Link>
        </Text>
        <Stack shouldWrapChildren mt={4} isInline spacing="12px" justify="center">
          <Link isExternal href="https://github.com/nunsie">
            <GitHub />
          </Link>
          <Link isExternal href="https://twitter.com/md5hashbrown">
            <Twitter />
          </Link>
          <Link isExternal href="mailto:nusrath501khan@gmail.com">
            <Mail />
          </Link>
        </Stack>
      </Box>
    </Box>
  )
}

export default Home
