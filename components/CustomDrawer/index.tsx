import { Drawer, DrawerProps } from '@mui/material'
import React from 'react'

interface DefaultProps extends DrawerProps {
  window?: () => Window
  drawer?: React.ReactNode
  drawerWidth?: number
}

type onDrawerToggle = () => void

interface CustomDrawerProps extends DefaultProps {
  mobileOpen?: boolean
  onDrawerToggle?: onDrawerToggle
}

const BaseDrawer = (props: DefaultProps) => {
  const { drawer, ...others } = props
  return <Drawer {...others}>{drawer}</Drawer>
}

export const MobileDrawer = (props: CustomDrawerProps) => {
  const { window, onDrawerToggle, mobileOpen, ...others } = props
  const container = window !== undefined ? () => window().document.body : undefined
  
  return (
    <BaseDrawer
      {...others}
      variant="temporary"
      open={mobileOpen}
      onClose={onDrawerToggle}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: '100%',
        },
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      container={container}
    />
  )
}

export const TabletLaptopDrawer = (props: CustomDrawerProps) => {
  const { drawerWidth, sx, open, variant, ...others } = props

  return (
    <BaseDrawer
      {...others}
      open={open}
      variant={variant ?? 'permanent'}
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        '& .MuiPaper-root': {
          height: 'calc(100% - 71px)',
          mt: '71px',
        },
        ...sx,
      }}
    />
  )
}
