import { theme as chakraTheme } from '@chakra-ui/core'

const makeTheme = <T extends any>(chakraTheme: T) => {
  return {
    ...chakraTheme,
    fonts: {
      body: 'Helvetica Neue, sans-serif'
    },
    colors: {
      ...chakraTheme.colors,
      blue: {
        50: '#e6f0fd',
        100: '#cae0fc',
        200: '#aacefa',
        300: '#85b9f8',
        400: '#579ef5',
        500: '#1478f2',
        600: '#126cda',
        700: '#0f5ebe',
        800: '#0d4e9d',
        900: '#09376f'
      },
      neutral: {
        lightest: '#F9F9FB',
        light: '#f0f1f3',
        base: '#404041',
        dark: '#222429'
      },
      brand: {
        primary: '#007FFF',
        secondary: '#17224D',
        light: '#F5FAFA',
        accent: '#17E9E1'
      },
      border: {
        default: '#E4E7EB',
        muted: '#EDF0F2'
      },
      text: {
        muted: '#66788A',
        default: '#425A70',
        dark: '#222429'
      },
      intent: {
        success: '#47B881',
        danger: '#EC4C47',
        warning: '#D9822B',
        info: '#5AC1F2'
      },
      background: {
        tint1: '#F9F9FB',
        tint2: '#F5F6F7'
      },
      solid: {
        black: '#000',
        white: '#FFF'
      },
      opacity: {
        transparent: 'transparent',
        transparentBlack: 'rgba(0,0,0,0.1)',
        transparentWhite: 'rgba(255,255,255,0.5)'
      }
    },
    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    gridGutter: 1 // rem - taken from Chakra UI space scale https://chakra-ui.com/theme#spacing
  }
}

const theme = makeTheme(chakraTheme)

export { theme }
