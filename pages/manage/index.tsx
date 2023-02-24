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
}

const ManageLayout = (props: StackProps & DefaultProps) => {
  const { children } = props
  const [mobileOpen, setMobileOpen] = useState(false)
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

  const drawer = <SideMenu handleDrawerToggle={handleDrawerToggle} />
  let sidebarChildren
  const { pathname } = useRouter()

  switch (pathname) {
    case '/manage/candidates':
      sidebarChildren = <EnrollmentTimeline handleSidebarToggle={handleSidebarToggle} />
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
        sx={{
          p: '20px 24px',
          width: {
            xs: '100%',
            sm: `calc(100% - ${drawerWidth}px)`,
            lg: `calc(100% - ${drawerWidth + sidebarWidth}px)`,
          },
        }}
      >
        <PageHeading
          handleDrawerToggle={handleDrawerToggle}
          handleSidebarToggle={handleSidebarToggle}
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
          variant={downLg ? 'temporary' : 'permanent'}
          drawerWidth={sidebarWidth}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              mt: downLg ? '0 !important' : '71px',
              height: downLg ? '100% !important' : 'calc(100% - 71px)',
              width: downLg ? '100%' : sidebarWidth,
            },
          }}
          ModalProps={{
            keepMounted: downLg ? true : false, // Better open performance on mobile.
          }}
          mobileOpen={mobileSidebarOpen}
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
