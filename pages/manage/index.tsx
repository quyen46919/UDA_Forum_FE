import React, { useState } from 'react'
import { MainLayout } from '@layout/main'
import { Stack, StackProps, useTheme, useMediaQuery } from '@mui/material'
import SideMenu from '@components/SideMenu'
import PageHeading from '@components/SideMenu/PageHeading'
import { MobileDrawer, TabletLaptopDrawer } from '@components/CustomDrawer'
import { useRouter } from 'next/router'
import EnrollmentTimeline from './candidates/EnrollmentTimeline'

const drawerWidth = 240
const sidebarWidth = 400
interface DefaultProps {
  sidebarChildren?: React.ReactNode
  enableSidebar?: boolean
}

const ManageLayout = (props: StackProps & DefaultProps) => {
  const { children, enableSidebar } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const [drawerOpen, seDrawerOpen] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  const downLg = useMediaQuery(theme.breakpoints.down('lg'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleSidebarToggle = () => {
    setMobileSidebarOpen(!mobileSidebarOpen)
  }

  const handleToggle = () => {
    seDrawerOpen(!drawerOpen)
  }

  const drawer = <SideMenu handleDrawerToggle={handleDrawerToggle} />
  let sidebarChildren
  const { pathname } = useRouter()

  switch (pathname) {
    case '/manage/candidates':
      sidebarChildren = <EnrollmentTimeline handleSidebarToggle={handleToggle} />
      break
    default:
      break
  }

  return (
    <Stack direction="row" mb={downSm ? '68px' : 0}>
      <Stack component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <MobileDrawer drawer={drawer} onDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        <TabletLaptopDrawer drawer={drawer} drawerWidth={drawerWidth} />
      </Stack>
      <Stack
        component="main"
        sx={{
          backgroundColor: theme.palette.primary.main,
          p: '20px 24px',
          minHeight: 'calc(100vh - 70px)',
          width: {
            xs: '100%',
            sm: `calc(100% - ${drawerWidth}px)`,
            lg: drawerOpen
              ? `calc(100% - ${drawerWidth + sidebarWidth}px)`
              : `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <PageHeading
          handleDrawerToggle={handleDrawerToggle}
          handleSidebarToggle={handleToggle}
          drawerOpen={drawerOpen}
          enableSidebar={enableSidebar}
        />
        {children}
      </Stack>
      <Stack>
        <MobileDrawer
          anchor="right"
          drawer={sidebarChildren}
          onDrawerToggle={handleSidebarToggle}
          mobileOpen={mobileSidebarOpen}
        />
        <TabletLaptopDrawer
          drawer={sidebarChildren}
          anchor="right"
          variant="persistent"
          drawerWidth={sidebarWidth}
          open={drawerOpen}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              mt: downLg ? '0 !important' : '71px',
              height: downLg ? '100% !important' : 'calc(100% - 71px)',
              width: downLg ? '100%' : sidebarWidth,
            },
          }}
        />
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
