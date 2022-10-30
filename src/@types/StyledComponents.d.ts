import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      secondaryText: string;
      textTable: string;
      outline: string;
      background: string;
      foreground: string;
      midground: string;
      brand: string;
    },
    maxWidth: string;
    borderRadius: string;
  }
}