import React from 'react'
import { Box, Flex, IconButton, useColorMode, Link, Stack } from '@chakra-ui/core'
import { GitHub, Moon, Sun } from 'react-feather'
import Logo from '../Logo'
import Container from '../Container'

const Header = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = { light: 'white', dark: 'gray.800' }
  return (
    <Box
      pos="fixed"
      as="header"
      top="0"
      zIndex="4"
      bg={bg[colorMode]}
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      height="4rem"
      {...props}
    >
      <Container h="100%">
        <Flex size="100%" px="6" align="center" justify="space-between">
          <Box
            as="a"
            d="block"
            aria-label="Chakra UI, Back to homepage"
            onClick={() => (window.location.href = '/')}
          >
            <Logo />
          </Box>
          <Flex align="center" color="gray.500">
            <Stack align="center" isInline spacing="3">
              <Link isExternal href="https://github.com/nunsie/cra-template-chakra">
                <Box as={GitHub} size="6" color="current" />
              </Link>
              {/* <Link isExternal href="https://chakra-ui.netlify.com">
                <Box as={StorybookIcon} size="6" color="current" />
              </Link> */}
            </Stack>
            <IconButton
              aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
              variant="ghost"
              color="current"
              ml="2"
              fontSize="20px"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? Moon : Sun}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
