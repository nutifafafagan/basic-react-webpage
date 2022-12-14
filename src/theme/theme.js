import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  base: '20em', // 320
  sm: '23.43em', // 375
  md: '48em', // 768
  lg: '62em', // 992
  xl: '80em', // 1280
  '2xl': '85.375em', // 1366
  '3xl': '90em', // 1440
  '4xl': '96em', // 1536
  '5xl': '120em' // 1920
})

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontSize: 'md',
        fontFamily: '"CeraPro", sans-serif',
        lineHeight: 'tall',
        bg: 'gray.50'
      }
    })
  },
  breakpoints,
  fonts: {
    heading: '"CeraPro" ,sans-serif',
    body: '"CeraPro", sans-serif'
  },
  fontSizes: {
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem'
  },
  colors: {
    primary: '#004C46',
    heading: '#333333',
    text: '#666666',
    headline: '#6E7575',
    yellowLight: 'rgba(224, 141, 10, 0.1)',
    yellowDark: '#E08D0A',
    cf: {
      100: 'rgba(49,188,46,0.1)',
      200: 'rgba(2, 45, 43, 0.1)',
      300: '#DCE5E5',
      350: 'rgba(59, 145, 48, 0.7)',
      400: '#31BC2E',
      450: '#9DC897',
      500: 'rgba(60, 145, 48, 0.18)',
      600: '#d6e1c9',
      700: '#307926',
      800: '#5AA250',
      900: '#004C46'
    },
    'cf-dark': {
      200: 'rgba(227, 231, 221, 0.2)',
      250: 'rgba(97, 111, 57, 0.1)'
    },
    cfButton: {
      500: '#3c9130',
      600: '#307926'
    },
    progressGreen: {
      500: '#d6e1c9',
      600: '#3c9130'
    },
    primaryButton: {
      200: '#1f7a73',
      500: '#004C46',
      600: '#004C46'
    },
    dangerButton: {
      500: '#E53E3E',
      600: '#E53E3E'
    }
  },
  space: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    75: '19rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    109: '28rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    122: '37rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    145: '76rem'
  },
  sizes: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    109: '28rem',
    110: '30rem',
    115: '32rem',
    117: '33rem',
    120: '35rem',
    122: '37rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    145: '76rem'
  },
  shadows: {
    1000: '0 10px 20px 0 rgba(97, 111, 57, 0.5)',
    2000: '10px 10px 20px 0 rgba(0, 0, 0, 0.1);'
  }
})
