import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#212529',
    },
    secondary: {
      main: '#505763',
    },
    black: {
      main: '#1c1d1f',
    },
    white: {
      main: '#ffffff',
    },
    error: {
      main: '#EC5252',
    },
    blueGrey: {
      main: '#26394E',
    },
    blackGrey: {
      main: '#101010',
    },
    greyDefault: {
      main: '#f2f3f5',
    },
  },
  typography: {
    h2: {
      fontSize: 50,
      fontWeight: 700,
    },
  },
  components: {
    // override component stype
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary']
    black: Palette['primary']
    blueGrey: Palette['primary']
    blackGrey: Palette['primary']
    greyDefault: Palette['primary']
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
    blueGrey?: PaletteOptions['primary']
    blackGrey?: PaletteOptions['primary']
    greyDefault?: PaletteOptions['primary']
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
    blueGrey: true
    blackGrey: true
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
    blueGrey: true
    black: true
  }
}

export default theme
