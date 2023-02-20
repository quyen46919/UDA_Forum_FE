import React, { ReactNode, useEffect, useState } from 'react'
import NavLink from '@components/NavLink'
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Stack,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import storage from 'libs/helpers/localStorage'
import {
  ArrowBackIOSIcon,
  ExitIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  FiberManualRecordIcon,
} from 'libs/icons'
import { menu, subMenu } from './menu'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ItemProps {
  title: string
  path: string
  icon: ReactNode
  children?: {
    title: string
    path: string
  }[]
}

type handleDrawerToggle = () => void

interface SideMenuProps {
  handleDrawerToggle: handleDrawerToggle
}

const SideMenu = ({ handleDrawerToggle }: SideMenuProps) => {
  const [selected, setSelected] = useState<string | null>('')
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  const { pathname } = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && storage.getValueFromKey('selected')) {
      setSelected(storage.getValueFromKey('selected'))
    }
  }, [pathname])

  const handleClick = (title: string, item: ItemProps) => {
    if (!item.hasOwnProperty('children')) {
      storage.clear()
    } else {
      if (title !== selected) {
        setSelected(title)
        storage.setValueIntoKey('selected', title)
      } else {
        setSelected('')
      }
    }
  }

  const LISTITEM_STYLES = {
    '&.MuiListItem-root': {
      '& a': {
        width: '100%',
        borderRadius: '4px',
      },
      '& .MuiButtonBase-root': {
        borderRadius: '4px',
        '& .MuiListItemIcon-root': {
          minWidth: 'fit-content',
          mr: '15px',
        },
        '& .MuiListItemText-root span, svg path': {
          fontSize: '16px',
          color: '#90a0b7',
          fill: '#90a0b7',
        },
        '&:hover': {
          backgroundColor: theme.palette.orange.main,
          boxShadow: '1px 3px 17px -2px rgba(255,105,52,0.4)',
          color: theme.palette.white.main,
          '& .MuiListItemText-root span, svg path': {
            color: theme.palette.white.main,
            fill: theme.palette.white.main,
            fillOpacity: 1,
          },
        },
      },
      '& a.active': {
        background: theme.palette.orange.main,
        color: theme.palette.white.main,
        boxShadow: '1px 3px 17px -4px rgba(255,105,52,0.4)',
        '& .MuiListItemText-root span, svg path': {
          color: theme.palette.white.main,
          fill: theme.palette.white.main,
          fillOpacity: 1,
        },
      },
    },
  }

  return (
    <Stack height="100%">
      {downSm && (
        <Stack direction="row" width="100%" justifyContent="flex-start" alignItems="center">
          <IconButton
            sx={{
              p: '6px',
              '&:hover': {
                '& svg path': { fill: theme.palette.white.main },
              },
            }}
            onClick={handleDrawerToggle}
          >
            <ArrowBackIOSIcon />
          </IconButton>
        </Stack>
      )}
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '100%' }}>
        {menu?.map((item: ItemProps, index) => {
          if (item.children && item.children.length) {
            return (
              <Stack key={index}>
                <ListItem
                  onClick={() => handleClick(item.title, item)}
                  disablePadding
                  sx={LISTITEM_STYLES}
                >
                  <NavLink href={item.path}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.title} />
                      {item.title === selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                  </NavLink>
                </ListItem>
                <Collapse
                  sx={{ mt: '6px' }}
                  in={item.title === selected}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
                    disablePadding
                  >
                    {item.children?.map((item, index) => {
                      return (
                        <ListItem key={index} disablePadding sx={LISTITEM_STYLES}>
                          <NavLink href={item.path}>
                            <ListItemButton sx={{ pl: 4 }}>
                              {pathname === item.path && (
                                <ListItemIcon>
                                  <FiberManualRecordIcon />
                                </ListItemIcon>
                              )}
                              <ListItemText primary={item.title} />
                            </ListItemButton>
                          </NavLink>
                        </ListItem>
                      )
                    })}
                  </List>
                </Collapse>
              </Stack>
            )
          } else {
            return (
              <ListItem
                disablePadding
                key={index}
                onClick={() => handleClick(item.title, item)}
                sx={LISTITEM_STYLES}
              >
                <NavLink href={item.path} exact>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            )
          }
        })}
        <Divider sx={{ m: '26px 0' }} />
        {subMenu?.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            onClick={() => handleClick(item.title, item)}
            sx={LISTITEM_STYLES}
          >
            <NavLink href={item.path} exact>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>

      <Stack
        component="footer"
        direction="row"
        alignItems="center"
        sx={{ '& a': { width: '100%' } }}
      >
        <Link href="/logout">
          <a>
            <IconButton
              sx={{
                p: '8px 16px',
                width: '100%',
                '&:hover': {
                  backgroundColor: theme.palette.error.main,
                  color: theme.palette.white.main,
                  '& svg path': {
                    fill: theme.palette.white.main,
                  },
                },
                '& svg': { mr: '15px', '& path': { fill: theme.palette.error.main } },
                color: theme.palette.error.main,
                justifyContent: 'flex-start',
              }}
            >
              <ExitIcon />
              <Typography variant="body1" fontSize="16px">
                Rời khỏi lớp
              </Typography>
            </IconButton>
          </a>
        </Link>
      </Stack>
    </Stack>
  )
}

export default SideMenu
