import { DefaultTheme } from "styled-components"

interface Theme {
  [themeName: string]: DefaultTheme;
}

export const theme: Theme = {
  dark: {
    colors: {
      text: '#fff',
      secondaryText: '#878d9d',
      textTable: '#c0c5d5',
      outline: '#fff',
      background: '#21222d',
      foreground: '#2c2c37',
      midground: '#24242f',
      brand: '#6360c5'
    },
    maxWidth: 'calc(1360px + 2rem)',
    borderRadius: '8px',
  },
  light: {
    colors: {
      text: '#0e0d14',
      secondaryText: '#878d9d',
      textTable: '#3e4044',
      outline: '#0e0d14',
      background: '#f4f7ff',
      foreground: '#ffffff',
      midground: '#e8f0fb',
      brand: '#6360c5'
    },
    maxWidth: 'calc(1360px + 2rem)',
    borderRadius: '8px',
  }
}