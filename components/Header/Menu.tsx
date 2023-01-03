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
          <Typography variant="body1">Thông tin của tôi</Typography>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Trang Chủ Cá Nhân</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Quản Lý Thông Tin</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Thiết lập quyền riêng tư</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Quản Lý Danh Sách Chặn</ListItemText>
            <ChevronRightIcon />
          </MenuItem>
        </Stack>

        <Divider />
        <Stack padding="10px" gap="4px">
          <Typography>Thiết Lập Hệ Thống</Typography>
          <MenuItem aria-describedby={idPopup} onClick={handlePopUpClick}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Đổi Ngôn Ngữ</ListItemText>
            <ListItemText sx={{ display: { xs: 'none', lg: 'block' }, textAlign: 'right' }}>
              Tiếng Việt
            </ListItemText>
            <ChevronRightIcon />
          </MenuItem>

          <MenuItem aria-describedby={idPopup2} onClick={handlePopUpClick2}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Cài Đặt Hiển Thị</ListItemText>
            <ListItemText sx={{ display: { xs: 'none', lg: 'block' }, textAlign: 'right' }}>
              Chế độ sáng
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
                <Typography>Tiếng Việt</Typography>
              </MenuItem>
              <MenuItem onClick={() => setPopupAnchorEl(null)}>
                <Typography>Tiếng Anh</Typography>
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
              <Typography>Hệ Thống Mặc Định</Typography>
            </MenuItem>
            <MenuItem onClick={() => setPopupAnchorEl2(null)}>
              <Typography>Chế độ sáng</Typography>
            </MenuItem>
            <MenuItem onClick={() => setPopupAnchorEl2(null)}>
              <Typography>Chế độ tối</Typography>
            </MenuItem>
          </Stack>
        </Popover>
        <Stack padding="10px" gap="4px">
          <MenuItem onClick={() => handleLinkToUrlClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Đăng Xuất</ListItemText>
          </MenuItem>
        </Stack>
      </Menu>
    </Stack>
  )
}

export default MenuCustom
