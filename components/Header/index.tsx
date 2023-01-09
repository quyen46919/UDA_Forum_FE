import React, { useState } from 'react'
import ListIcon from '@components/ListIcon'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import {
  AppBar,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Drawer from '@mui/material/Drawer'
import MenuItem from './Menu'
import { Logo, MessageIcon, NotificationIcon, SearchIcon } from 'libs/icons'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const upLg = useMediaQuery(theme.breakpoints.up('lg'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleDrawerClose = () => {
    setMobileOpen(false)
  }

  return (
    <Stack mb="70px">
      <AppBar
        sx={{
          backgroundColor: theme.palette.white.main,
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Stack padding="15px 0" height="70px" direction="row" alignItems="center" width="100%">
            <Stack flex={{ lg: '1' }}>
              <Stack direction="row" gap="10px" alignItems="center" sx={{ cursor: 'pointer' }}>
                <Logo />
                <Typography
                  variant="h1"
                  color={theme.palette.darkOrange.main}
                  display={{ xs: 'none', sm: 'none', lg: 'block' }}
                >
                  UDA Forum
                </Typography>
              </Stack>
            </Stack>
            <Stack
              flex={{ xs: '4', lg: '3' }}
              direction="row"
              justifyContent={{ xs: 'start', lg: 'center' }}
              gap="17px"
            >
              {upLg && <ListIcon direction="row" alignItems="center" gap="20px" />}
              {upLg ? (
                <TextField
                  placeholder="Type here to search..."
                  variant="outlined"
                  spellCheck="false"
                  InputProps={{
                    endAdornment: (
                      <IconButton sx={{ padding: '8px' }}>
                        <SearchIcon />
                      </IconButton>
                    ),
                  }}
                  sx={{ minWidth: { lg: '440px' } }}
                />
              ) : (
                <>
                  <IconButton sx={{ padding: '8px' }} onClick={handleDrawerToggle}>
                    <SearchIcon />
                  </IconButton>
                  <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                      display: 'block',
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
                    }}
                  >
                    <Stack
                      direction="row"
                      width="100%"
                      justifyContent="center"
                      alignItems="center"
                      position="relative"
                    >
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: '0%',
                          left: '0%',
                        }}
                        onClick={handleDrawerClose}
                      >
                        <ChevronLeftIcon fontSize="large" />
                      </IconButton>
                      <Stack sx={{ cursor: 'pointer' }}>
                        <Typography
                          variant="h1"
                          fontSize="22px"
                          color={theme.palette.darkOrange.main}
                        >
                          UDA Forum
                        </Typography>
                      </Stack>
                    </Stack>
                    <TextField
                      placeholder="Type here to search..."
                      variant="outlined"
                      spellCheck="false"
                      InputProps={{
                        endAdornment: (
                          <IconButton sx={{ padding: '8px' }}>
                            <SearchIcon />
                          </IconButton>
                        ),
                      }}
                      sx={{ minWidth: { lg: '440px', margin: '25px 0' } }}
                    />
                  </Drawer>
                </>
              )}
            </Stack>
            <Stack
              flex="1"
              sx={{ gap: { lg: '25px' } }}
              direction="row"
              alignItems="center"
              justifyContent="end"
            >
              <IconButton>
                <MessageIcon color={upLg ? 'darkGrey' : 'lightGrey'} />
              </IconButton>
              <IconButton sx={{ mr: '10px' }}>
                <NotificationIcon color={upLg ? 'darkGrey' : 'lightGrey'} />
              </IconButton>
              <MenuItem />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  )
}

export default Header
