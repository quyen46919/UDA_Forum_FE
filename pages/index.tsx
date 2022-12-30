import React from 'react'
import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import { Stack, useTheme } from '@mui/material'
const Home: NextPageWithLayout = () => {
  const theme = useTheme()
  return (
    <Stack
      sx={{ backgroundColor: theme.palette.secondary.main }}
      direction={{ xs: 'column', lg: 'row' }}
      minHeight="calc(100vh - 80px)"
      pt="20px"
      gap="20px"
    >
      <Stack
        sx={{
          position: { lg: 'sticky' },
          top: { lg: '100px' },
          height: { lg: 'calc(100vh - 120px)' },
        }}
        flex="1"
        m={{ xs: '0 20px', lg: '0 0 0 40px' }}
        borderRadius="16px"
      ></Stack>
      <Stack
        flex="3"
        m={{ xs: '0 20px', lg: 0 }}
        borderRadius="16px"
        gap="20px"
      ></Stack>
      <Stack
        sx={{
          position: { lg: 'sticky' },
          top: { lg: '100px' },
          height: { lg: 'calc(100vh - 120px)' },
        }}
        flex="1"
        m={{ xs: '0 20px', lg: '0 40px 0 0' }}
        borderRadius="16px"
        gap="20px"
      ></Stack>
    </Stack>
  )
}
Home.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'UDA FORUM 2022' },
  }
}

export default Home
