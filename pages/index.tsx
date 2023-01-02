import React from 'react'
import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import { Stack, useMediaQuery, useTheme } from '@mui/material'
import Tags from '@components/Tags'
import {
  FollowingIcon,
  NewIcon,
  PopularIcon,
  JSIcon,
  BitcoinIcon,
  DesignIcon,
  BusinessIcon,
  InnovationIcon,
  TutorialIcon,
} from 'public/icons'

const items = {
  data: [
    {
      icon: <NewIcon />,
      primary: 'Newest and Recent',
      primaryMobile: 'Newest',
      secondary: 'Find the latest update',
    },
    {
      icon: <PopularIcon />,
      primary: 'Popular of the day',
      primaryMobile: 'Popular',
      secondary: 'Short featured today by curators',
    },
    {
      icon: <FollowingIcon />,
      primary: 'Following',
      primaryMobile: 'Following',
      notificationNumber: 100,
      secondary: 'Explore from your favorite person',
    },
  ],
}

const popularItems = {
  title: 'Popular Tags',
  data: [
    {
      icon: <JSIcon />,
      primary: '#javascript',
      secondary: '82,645 Posted by this tag',
    },
    {
      icon: <BitcoinIcon />,
      primary: '#bitcoin',
      secondary: '65,523 Posted • Trending',
    },
    {
      icon: <DesignIcon />,
      primary: '#design',
      secondary: '51,354 • Trending in Bangladesh',
    },
    {
      icon: <InnovationIcon />,
      primary: '#innovation',
      secondary: '48,029 Posted by this tag',
    },
    {
      icon: <TutorialIcon />,
      primary: '#tutorial',
      secondary: '51,354 • Trending in Bangladesh',
    },
    {
      icon: <BusinessIcon />,
      primary: '#busieness',
      secondary: '82,645 Posted by this tag',
    },
  ],
}

const Home: NextPageWithLayout = () => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack
      sx={{ backgroundColor: theme.palette.secondary.main }}
      direction={{ xs: 'column', lg: 'row' }}
      minHeight="calc(100vh - 80px)"
      pt="20px"
      gap="20px"
    >
      <Stack
        flex="1"
        sx={{
          position: { lg: 'sticky' },
          top: { lg: '100px' },
          height: { lg: 'calc(100vh - 120px)' },
        }}
        m={{ xs: '0 20px', lg: '0 0 0 40px' }}
        borderRadius="16px"
        gap="20px"
      >
        <Tags items={items} />
        {!downSm && <Tags items={popularItems} />}
      </Stack>
      <Stack flex="3.5" m={{ xs: '0 20px', lg: 0 }} borderRadius="16px" gap="20px"></Stack>
      <Stack
        flex="1.5"
        sx={{
          position: { lg: 'sticky' },
          top: { lg: '100px' },
          height: { lg: 'calc(100vh - 120px)' },
        }}
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
