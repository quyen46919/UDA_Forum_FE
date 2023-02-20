import React, { useState } from 'react'
import { MainLayout } from '@layout/main'
import { Drawer, Stack, StackProps, useTheme } from '@mui/material'
import SideMenu from '@components/SideMenu'
import PageHeading from '@components/SideMenu/PageHeading'

const drawerWidth = 240

interface DefaultProps {
  window?: () => Window
}

const ManageLayout = (props: StackProps & DefaultProps) => {
  const { window, children } = props
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = <SideMenu handleDrawerToggle={handleDrawerToggle} />
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Stack direction="row">
      <Stack
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            '& .MuiPaper-root': {
              height: 'calc(100% - 71px)',
              mt: '71px',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Stack>
      <Stack
        sx={{
          flexGrow: 1,
          p: '24px',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <PageHeading handleDrawerToggle={handleDrawerToggle} />
        {children}
      </Stack>
    </Stack>
  )
}

ManageLayout.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Quản lý | UDA FORUM 2022' },
  }
}

export default ManageLayout
