import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F4F6F8',
    },
    secondary: {
      main: '#F7F7F7',
    },
    black: {
      main: '#42444F',
    },
    white: {
      main: '#ffffff',
    },
    error: {
      main: '#EC5252',
    },
    orange: {
      main: '#FF6934',
    },
    red: {
      main: '#FF8F67',
    },
    yellow: {
      main: '#EEA956',
    },
    blue: {
      main: '#5D95E8',
    },
    green: {
      main: '#3ED6A4',
    },
    purple: {
      main: '#848DF9',
    },
    textGrey: {
      main: '#9699AA'
    },
    iconGrey: {
      main: '#9A99A0'
    }
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h2: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '26px',
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '22px',
    },
    h4: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '18px',
    },
    h5: {
      fontSize: 10,
      fontWeight: 400,
      lineHeight: '16px',
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '22px',
    }
  },
  components: {
    // override component stype
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary']
    black: Palette['primary']
    orange: Palette['primary']
    red: Palette['primary']
    yellow: Palette['primary']
    blue: Palette['primary']
    green: Palette['primary']
    purple: Palette['primary']
    textGrey: Palette['primary']
    iconGrey: Palette['primary']
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    red?: PaletteOptions['primary']
    yellow?: PaletteOptions['primary']
    blue?: PaletteOptions['primary']
    green?: PaletteOptions['primary']
    purple?: PaletteOptions['primary']
    textGrey?: PaletteOptions['primary']
    iconGrey?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true
    white: true
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    white: true
    black: true
    orange: true
    red: true
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    grey: true
    white: true
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    orange: true
    black: true
  }
}

export default theme
