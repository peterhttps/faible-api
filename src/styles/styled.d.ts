import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    spacing: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxl2: string;
      xxl3: string;
      xxl4: string;
      xxl5: string;
      xxl6: string;
      xxl7: string;
      xxl8: string;
    };

    colors: {
      typography: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      orange: string;
      purple: string;
      primary: string;
      background: string;
    };
  }
}
