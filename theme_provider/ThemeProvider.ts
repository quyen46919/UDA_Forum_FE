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
      dark: '#212121'
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
    darkOrange: {
      main: '#FF4401',
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
      main: '#9699AA',
    },
    textLightGrey: {
      main: '#C1C1C3',
    },
    iconGrey: {
      main: '#9A99A0',
    },
    lightGrey: {
      main: '#C5CFE5',
    },
    darkGrey: {
      main: '#878FAF',
    },
    backgroundTextGrey: {
      main: '#F4F6F8',
    },
  },
  typography: {
    fontFamily: `'Source Sans Pro', 'Roboto', sans-serif;`,
    h1: {
      fontSize: 26,
      fontWeight: 700,
      lineHeight: '38px',
    },
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
    },
    body2: {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: '#FF4401',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#FF6F00',
            },
            '&:focus': {
              backgroundColor: '#E65100'
            },
            '&:disabled': {
              backgroundColor: '#C2CFE0',
              color: '#FFF'
            }
          }
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            backgroundColor: '#90A0B7',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#FF6F00',
            },
            '&:focus': {
              backgroundColor: '#E65100'
            },
            '&:disabled': {
              backgroundColor: '#C2CFE0',
              color: '#FFF'
            }
          }
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            backgroundColor: '#FF4401',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#FF6F00',
            },
            '&:focus': {
              backgroundColor: '#E65100'
            },
            '&:disabled': {
              backgroundColor: '#C2CFE0',
              color: '#FFF'
            }
          }
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '10px 16px',
          textTransform: 'unset',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          height: '44px'
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#FF4401'
        }
      }
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            root: {
              '& div': {
                maxHeight: '40px',
                padding: '2px 12px 2px 0px'
              },

              borderRadius: '8px',
              fieldset: {
                outline: 'none',
                border: 'none',
              },
              input: {
                padding: '9px 10px 9px 20px'
              }
            }
          }
        },
        {
          props: { variant: 'standard' },
          style: {
            '&': {
              '&:hover': {
                '& .MuiInputLabel-root': {
                  color: '#334D6E',
                },
                '& .MuiInputBase-root.MuiInput-root': {
                  '&:before': {
                    borderBottom: '1px solid #334D6E'
                  }
                }
              },
              '& 	.MuiInputLabel-root': {
                color: '#707683',
                lineHeight: '16px',
                fontSize: '14px',
                fontWeight: 400,
                '&.Mui-focused': {
                  color: '#FF4401',
                },
                '&.Mui-error': {
                  color: '#DE5D52'
                },
                '&.Mui-disabled': {
                  color: '#90A0B7'
                },
                '&.Mui-required .MuiFormLabel-asterisk': {
                  color: '#DE5D52'
                }
              },
              '& .MuiInputBase-root.MuiInput-root': {
                '& input': {
                  '::placeholder, :-ms-input-placeholder, ::-ms-input-placeholder': {
                    color: '#90A0B7',
                  },
                },
                color: "#192A3E",
                caretColor: '#FF4401',
                '&:before': {
                  borderBottom: '1px solid #90A0B7'
                },
                '&:after': {
                  borderBottom: '2px solid #FF4401'
                },
                '&.Mui-error': {
                  '&:after': {
                    borderBottom: '2px solid #DE5D52'
                  },
                },
                '&.Mui-disabled': {
                  color: '#90A0B7',
                  '&:before': {
                    borderBottom: '1px solid #C2CFE0'
                  },
                }
              },
              '& .MuiFormHelperText-root': {
                '&.Mui-error': {
                  color: '#DE5D52'
                }
              }
            }
          }
        },
      ],
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
        }
      }
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { color: 'lightGrey' },
          style: {
            width: '40px',
            height: '40px',
            borderRadius: '7px',
            '&:hover': {
              backgroundColor: '#FF4401',
              color: 'white',
            },
          },
        },
        {
          props: { color: 'darkGrey' },
          style: {
            width: '40px',
            height: '40px',
            borderRadius: '7px',
            backgroundColor: '#F4F6F8',
            '&:hover': {
              backgroundColor: '#FF4401',
              color: 'white',
            },
          },
        },
        {
          props: { fill: 'primary' },
          style: {
            fill: '#FF4401',
            '&:hover': {
              fill: '#FF6F00',
            },
            '&:focus': {
              fill: '#E65100'
            },
            '&:disabled': {
              fill: '#C2CFE0',
            }
          }
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          borderRadius: '7px',
          '& span.MuiTouchRipple-root *': {
            borderRadius: '7px',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
          backgroundColor: '#FFF',
          '&:hover': {
            backgroundColor: '#FF6F00',
            color: '#FFF',
            '& svg': {
              fill: '#FFF'
            }
          },
          '&:focus': {
            backgroundColor: '#E65100'
          },
          '&:disabled': {
            backgroundColor: '#C2CFE0',
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          '&': {
            zIndex: 900,
          },
          '& > div': {
            paddingLeft: '22px',
            paddingRight: '22px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: 20,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: '10px',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px!important',
          border: '1px solid #C5CFE5!important',
          padding: '10px 20px',
          fontWeight: 600,
          '&.Mui-selected, &.Mui-selected:hover': {
            color: '#fff',
            backgroundColor: '#FF6934',
            border: '1px solid #FF6934!important',
          },
        },
      },
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary']
    black: Palette['primary']
    orange: Palette['primary']
    darkOrange: Palette['primary']
    red: Palette['primary']
    yellow: Palette['primary']
    blue: Palette['primary']
    green: Palette['primary']
    purple: Palette['primary']
    textGrey: Palette['primary']
    textLightGrey: Palette['primary']
    iconGrey: Palette['primary']
    lightGrey: Palette['primary']
    darkGrey: Palette['primary']
    backgroundTextGrey: Palette['primary']
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    darkOrange?: PaletteOptions['primary']
    red?: PaletteOptions['primary']
    yellow?: PaletteOptions['primary']
    blue?: PaletteOptions['primary']
    green?: PaletteOptions['primary']
    purple?: PaletteOptions['primary']
    textGrey?: PaletteOptions['primary']
    textLightGrey?: PaletteOptions['primary']
    iconGrey?: PaletteOptions['primary']
    lightGrey?: PaletteOptions['primary']
    darkGrey?: PaletteOptions['primary']
    backgroundTextGrey?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true
    white: true
    orange: true
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    white: true
    black: true
    orange: true
    darkOrange: true
    red: true
    lightGrey: true
    darkGrey: true
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
