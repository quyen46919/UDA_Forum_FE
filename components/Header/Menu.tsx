import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import {
  ListItemIcon,
  ListItemText,
  Typography,
  MenuItem,
  Popover,
  Stack,
  Tooltip,
  IconButton,
  Avatar,
  Divider,
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { PAPER_STYLES, POPOVER_STYLES } from './styles'
import { ArrowDropDownIcon, HomeIcon } from 'libs/icons'

const MenuCustom = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [popupAnchorEl2, setPopupAnchorEl2] = useState<null | HTMLElement>(null)
  const [popupAnchorEl, setPopupAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const popupOpen = Boolean(popupAnchorEl)
  const idPopup = popupOpen ? 'simple-popover' : undefined
  const menuId = 'primary-search-account-menu'

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLinkToUrlClick = () => {
    setAnchorEl(null)
  }

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopUpClick = (event: React.MouseEvent<HTMLElement>) => {
    setPopupAnchorEl(event.currentTarget)
  }

  const handlePopupClose = () => {
    setPopupAnchorEl(null)
  }

  const handlePopUpClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setPopupAnchorEl2(event.currentTarget)
  }

  const handlePopupClose2 = () => {
    setPopupAnchorEl2(null)
  }

  const popupOpen2 = Boolean(popupAnchorEl2)
  const idPopup2 = popupOpen2 ? 'simple-popover' : undefined

  return (
    <Stack>
      <Tooltip title="Phung Truong Dinh Quan">
        <Stack
          onClick={handleProfileMenuOpen}
          direction="row"
          alignItems="center"
          gap="16px"
          sx={{ cursor: 'pointer' }}
        >
          <IconButton>
            <Avatar
              sx={{
                padding: '3px',
                border: '1px solid #EA942C',
                borderRadius: '8px',
                '& img': {
                  borderRadius: '6px',
                  objectFit: 'cover',
                },
              }}
              alt="Avatar"
              src="https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370"
            />
          </IconButton>
          <Typography
            variant="body2"
            whiteSpace="nowrap"
            width="100px"
            textOverflow="ellipsis"
            overflow="hidden"
            display={{ xs: 'none', sm: 'none', lg: 'block' }}
          >
            Phung Truong Dinh Quan
          </Typography>
          <ArrowDropDownIcon
            sx={{
              width: '12px',
              height: '8px',
              display: { xs: 'none', sm: 'none', lg: 'block' },
            }}
          />
        </Stack>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={PAPER_STYLES}
      >
        <Stack padding="10px" gap="4px">
          <Typography variant="body1">Th??ng tin c???a t??i</Typography>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Trang Ch??? C?? Nh??n</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Qu???n L?? Th??ng Tin</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Thi???t l???p quy???n ri??ng t??</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Qu???n L?? Danh S??ch Ch???n</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
        </Stack>

        <Divider />
        <Stack padding="10px" gap="4px">
          <Typography>Thi???t L???p H??? Th???ng</Typography>
          <MenuItem aria-describedby={idPopup} onClick={handlePopUpClick}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>?????i Ng??n Ng???</ListItemText>
            <ListItemText sx={{ display: { xs: 'none', lg: 'block' }, textAlign: 'right' }}>
              Ti???ng Vi???t
            </ListItemText>
            <ChevronRightIcon />
          </MenuItem>

          <MenuItem aria-describedby={idPopup2} onClick={handlePopUpClick2}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>C??i ?????t Hi???n Th???</ListItemText>
            <ListItemText sx={{ display: { xs: 'none', lg: 'block' }, textAlign: 'right' }}>
              Ch??? ????? s??ng
            </ListItemText>
            <ChevronRightIcon />
          </MenuItem>
          <Popover
            sx={POPOVER_STYLES}
            id={idPopup}
            open={popupOpen}
            anchorEl={popupAnchorEl}
            onClose={handlePopupClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Stack padding="10px" gap="4px">
              <MenuItem onClick={() => setPopupAnchorEl(null)}>
                <Typography>Ti???ng Vi???t</Typography>
              </MenuItem>
              <MenuItem onClick={() => setPopupAnchorEl(null)}>
                <Typography>Ti???ng Anh</Typography>
              </MenuItem>
            </Stack>
          </Popover>
        </Stack>
        <Divider />
        <Popover
          elevation={0}
          sx={POPOVER_STYLES}
          id={idPopup2}
          open={popupOpen2}
          anchorEl={popupAnchorEl2}
          onClose={handlePopupClose2}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Stack padding="10px" gap="4px">
            <MenuItem onClick={() => setPopupAnchorEl2(null)}>
              <Typography>H??? Th???ng M???c ?????nh</Typography>
            </MenuItem>
            <MenuItem onClick={() => setPopupAnchorEl2(null)}>
              <Typography>Ch??? ????? s??ng</Typography>
            </MenuItem>
            <MenuItem onClick={() => setPopupAnchorEl2(null)}>
              <Typography>Ch??? ????? t???i</Typography>
            </MenuItem>
          </Stack>
        </Popover>
        <Stack padding="10px" gap="4px">
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>????ng Xu???t</ListItemText>
          </MenuItem>
        </Stack>
      </Menu>
    </Stack>
  )
}

export default MenuCustom
