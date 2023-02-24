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
            backgroundColor: '#FF6934',
            color: '#FFF',
            boxShadow: '1px 3px 17px -4px rgba(255,105,52,0.4)',
            '&:hover': {
              backgroundColor: '#FF8A65',
              boxShadow: '1px 3px 17px -2px rgba(255,105,52,0.4)'
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
            backgroundColor: '#FF6934',
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
          borderRadius: '5px',
          padding: '10px 20px',
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
            '&': {
              '.MuiInputBase-root.MuiOutlinedInput-root': {
                '& input': {
                  color: '#192A3E',
                  caretColor: '#FF4401',
                  padding: '12px 16px',
                  '::placeholder, :-ms-input-placeholder, ::-ms-input-placeholder': {
                    color: '#90A0B7',
                  },
                },
                '& fieldset': {
                  borderColor: '#90A0B7'
                },
                '&:hover': {
                  '& fieldset': {
                    borderColor: '#334D6E'
                  },
                },
                '&.Mui-focused': {
                  '& fieldset': {
                    borderColor: '#FF4401'
                  }
                },
                '&.Mui-error': {
                  '& fieldset': {
                    borderColor: '#DE5D52'
                  }
                },
                '&.Mui-disabled': {
                  backgroundColor: '#F5F7FA',
                  '& fieldset': {
                    borderColor: '#C2CFE0'
                  },
                }
              },
              '& .MuiFormHelperText-root': {
                margin: 0,
                marginTop: '4px',
                '&.Mui-error': {
                  color: '#DE5D52'
                }
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
          props: { fill: 'primary' },
          style: {
            fill: '#FF6F00',
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
      variants: [
        {
          props: { color: 'lightGrey' },
          style: {
            '& svg path': {
              fill: '#c5cfe5',
              fillOpacity: 1
            }
          }
        },
        {
          props: { color: 'darkGrey' },
          style: {
            backgroundColor: '#F4F6F8',
            '& svg path': {
              fill: '#878faf',
              fillOpacity: 1
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          padding: '6px',
          borderRadius: '7px',
          '& span.MuiTouchRipple-root *': {
            borderRadius: '7px',
          },
          '&:hover': {
            backgroundColor: '#FF6F00',
            '& svg, & svg path': {
              fill: '#FFFFFF',
              fillOpacity: 1
            }
          }
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
    MuiTabs: {
      styleOverrides: {
        root: {
          marginBottom: '40px',
          '& .MuiTabs-flexContainer': {
            display: 'flex',
          },
          '.MuiTabs-indicator': {
            backgroundColor: '#FF6934'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: 'linear-gradient(180deg, rgba(255,68,1,0.8) 100%, rgba(255,68,1,1) 100%, rgba(255,68,1,0.15) 100%)',
          fontSize: '14px'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#707683',
          fontWeight: 600,
          fontSize: '16px',
          '&.Mui-selected': {
            color: '#FF6934'
          }
        }
      }
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
    lightGrey: true
    darkGrey: true
  }
}

export default theme
