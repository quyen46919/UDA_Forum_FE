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
  ArrowRightIcon,
} from 'libs/icons'
import SchedulingTags from '@components/SchedulingTags'

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
const pinnedGroupTag = {
  title: `Pinned Group`,
  titleIcon: <ArrowRightIcon />,
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
      icon: <DesignIcon />,
      primary: '#blogging',
      secondary: '48,029 Posted by this tag',
    },
    {
      icon: <TutorialIcon />,
      primary: '#tutorial',
      secondary: '51,354 • Trending in Bangladesh',
    },
  ],
}

const schedulingItems = {
  title: 'Meetups',
  data: [
    {
      primary: 'UIHUT - Crunchbase Company Profile UIHUT',
      primaryMobile: 'Newest',
      secondary: 'UIHUT  •  Sylhet, Bangladesh UIHUT',
      avatar:
        'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      tags: [{ label: 'Remote' }, { label: 'Part-time' }, { label: 'Worldwide' }],
    },
    {
      primary: 'Design Meetups USA | Dribbble',
      primaryMobile: 'Popular',
      secondary: 'Dribbble  •  Austin, Texas, USA',
      avatar:
        'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      tags: [{ label: 'Remote' }, { label: 'Part-time' }],
    },
    {
      primary: 'Meetup Brand Identity Design',
      primaryMobile: 'Following',
      secondary: 'Behance  •  Sab jose, Califonia, USA',
      avatar:
        'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      tags: [{ label: 'Full Time' }, { label: 'Contract' }, { label: 'Worldwide' }],
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
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none' /* Hide Scrollbar IE and Edge */,
          scrollbarWidth: 'none',
        }}
        m={{ xs: '0 20px', lg: '0 0 0 40px' }}
        borderRadius="16px"
        gap="20px"
      >
        <Tags items={items} />
        {!downSm && <Tags items={popularItems} />}
        {!downSm && <Tags items={pinnedGroupTag} />}
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
      >
        <SchedulingTags items={schedulingItems} />
      </Stack>
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
