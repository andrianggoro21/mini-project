import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  CSSReset,
  ThemeProvider,
  ColorModeProvider
} from '@chakra-ui/core'
import { css, Global } from '@emotion/core'
import React from 'react'
import * as ReactDOM from 'react-dom'
import { ErrorBoundary } from './components'
import Navigation from './navigation'
import { register, unregister } from './serviceWorker'
import { theme } from './theme'

/**
 * Setup React Axe for accessibility
 */
if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe')
  axe(React as any, ReactDOM, 1000)
}

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Global
          styles={css`
            html {
              font-family: ${theme.fonts.body};
            }
          `}
        />
        <Navigation />
      </ColorModeProvider>
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById('root') as HTMLElement
)

if (process.env.REACT_APP_UNREGISTER_SERVICE_WORKER) {
  unregister()
} else {
  register({
    onUpdate: () =>
      function RegisterWorker() {
        return (
          <Alert status="info">
            <AlertIcon />
            <AlertTitle mr={2}>A new version is available!</AlertTitle>
            <AlertDescription>Please refresh your browser to get it.</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        )
      }
  })
}
