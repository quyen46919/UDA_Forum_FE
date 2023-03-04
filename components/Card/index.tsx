import React, { MouseEvent, useState } from 'react'
import EllipsisTypography from '@components/EllipsisTypography'
import NavLink from '@components/NavLink'
import {
  Avatar,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardProps as MuiCardProps,
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Stack,
  useTheme,
} from '@mui/material'
import {
  FiberManualRecordIcon,
  MessageIcon,
  MoreVertIcon,
  PhoneIcon,
  VideoCamIcon,
} from 'libs/icons'
import { handleStatus } from 'libs/utils'

type CardProps = MuiCardProps & {
  options?: {
    title?: string
    desc?: string
    avatar?: string
    href?: string
    alt?: string
    status?: number
  }
}

const menuOptions = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
]

const ITEM_HEIGHT = 48

export const Card = (props: CardProps) => {
  const { options, ...others } = props
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const Menu = () => (
    <MuiMenu
      id="long-menu"
      MenuListProps={{
        'aria-labelledby': 'long-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
        },
      }}
    >
      {menuOptions.map((option) => (
        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
          {option}
        </MenuItem>
      ))}
    </MuiMenu>
  )

  return (
    <MuiCard
      {...others}
      sx={{
        '&': {
          boxShadow: '1px 10px 29px -22px rgba(255,105,52,0.4)',
        },
      }}
    >
      <CardContent
        sx={{
          '&': {
            p: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          },
        }}
      >
        <Stack
          alignItems="center"
          mb="20px"
          position="relative"
          width="max-content"
          sx={{
            '& > svg': {
              position: 'absolute',
              fill: options?.status !== undefined ? handleStatus(options.status) : undefined,
              p: '1px',
              backgroundColor: theme.palette.white.main,
              borderRadius: 9999,
              bottom: 0,
              right: 0,
            },
          }}
        >
          {options && options.href && (
            <NavLink href={options.href} exact>
              <Avatar
                alt="User Avatar"
                src="https://via.placeholder.com/100"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </NavLink>
          )}
          <FiberManualRecordIcon />
        </Stack>
        <Stack>
          <IconButton
            sx={{
              position: 'absolute',
              right: '10px',
              top: '10px',
              height: '36px',
            }}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu />
        </Stack>
        <Stack alignItems="center" height="110px" maxHeight="110px">
          <EllipsisTypography variant="body2" fontSize="20px" fontWeight={600} textAlign="center">
            {options?.title}
          </EllipsisTypography>
          <EllipsisTypography variant="body2" color="#707683" fontWeight={400} textAlign="center">
            {options?.desc}
          </EllipsisTypography>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', gap: '10px', p: '20px', pt: 0 }}>
        <IconButton color="darkGrey">
          <PhoneIcon />
        </IconButton>
        <IconButton color="darkGrey">
          <MessageIcon />
        </IconButton>
        <IconButton color="darkGrey">
          <VideoCamIcon />
        </IconButton>
      </CardActions>
    </MuiCard>
  )
}
