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
import SchedulingTags from '@components/Tags/SchedulingTags'
import PodcastTags from '@components/Tags/PodcastTags'
import Question from '@components/Question'
import { data } from 'libs/seed-data'

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
  href: '/',
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
  href: '/',
  data: [
    {
      primary: 'UIHUT - Crunchbase Company Profile UIHUT',
      secondary: 'UIHUT  •  Sylhet, Bangladesh UIHUT',
      avatar:
        'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      tags: [{ label: 'Remote' }, { label: 'Part-time' }, { label: 'Worldwide' }],
    },
    {
      primary: 'Design Meetups USA | Dribbble',
      secondary: 'Dribbble  •  Austin, Texas, USA',
      avatar:
        'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      tags: [{ label: 'Remote' }, { label: 'Part-time' }],
    },
    {
      primary: 'Meetup Brand Identity Design',
      secondary: 'Behance  •  Sab jose, Califonia, USA',
      avatar:
        'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      tags: [{ label: 'Full Time' }, { label: 'Contract' }, { label: 'Worldwide' }],
    },
  ],
}

const podcastItems = {
  title: 'Podcasts',
  href: '/',
  data: [
    {
      img: 'https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?w=1380&t=st=1672749768~exp=1672750368~hmac=81aea0c926b3e21e940e8568eda5c6dda9665e0dc1b682cf6d71519847f3fa2f',
      primary: 'Selling a Business and Scaling Another Amidst Tragedy.',
      secondary: 'by Michele Hansen',
    },
    {
      img: 'https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?w=1380&t=st=1672749768~exp=1672750368~hmac=81aea0c926b3e21e940e8568eda5c6dda9665e0dc1b682cf6d71519847f3fa2f',
      primary: 'Mental health as a founder and the importance of community',
      secondary: 'by James McKinven',
    },
    {
      img: 'https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?w=1380&t=st=1672749768~exp=1672750368~hmac=81aea0c926b3e21e940e8568eda5c6dda9665e0dc1b682cf6d71519847f3fa2f',
      primary: 'Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so',
      secondary: 'by Mahfuzul Nabil',
    },
    {
      img: 'https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?w=1380&t=st=1672749768~exp=1672750368~hmac=81aea0c926b3e21e940e8568eda5c6dda9665e0dc1b682cf6d71519847f3fa2f',
      primary: 'Mental Health and Bootstrapping in 2022 with Rob Walling of TinySe',
      secondary: 'by Dr. Jubed',
    },
    {
      img: 'https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?w=1380&t=st=1672749768~exp=1672750368~hmac=81aea0c926b3e21e940e8568eda5c6dda9665e0dc1b682cf6d71519847f3fa2f',
      primary: 'Money, Happiness, and Productivity as a Solo Founder with Pieter Levels',
      secondary: 'by Jesse Hanley',
    },
    {
      img: 'https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?w=1380&t=st=1672749768~exp=1672750368~hmac=81aea0c926b3e21e940e8568eda5c6dda9665e0dc1b682cf6d71519847f3fa2f',
      primary: 'Mental health as a founder and the importance of community',
      secondary: 'by Courtland Allen',
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
      minHeight="calc(100vh - 70px)"
      p={{ xs: '20px', lg: '20px 40px 0 40px' }}
      gap="20px"
      maxWidth={{ lg: '1536px', xl: '1920px' }}
    >
      <Stack
        minWidth={{ lg: '240px' }}
        sx={{
          position: { lg: 'sticky' },
          top: { lg: '90px' },
          height: { lg: 'calc(100vh - 110px)' },
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none' /* Hide Scrollbar IE and Edge */,
          scrollbarWidth: 'none',
        }}
        borderRadius="16px"
        gap="20px"
      >
        <Tags items={items} />
        {!downSm && <Tags items={popularItems} />}
        {!downSm && <Tags items={pinnedGroupTag} />}
      </Stack>
      <Stack flex="1" borderRadius="16px" gap={{ xs: 0, lg: '20px' }} marginBottom={{ lg: '20px' }}>
        <Question data={data} />
      </Stack>
      <Stack
        minWidth={{ lg: '325px' }}
        sx={{
          position: { lg: 'sticky' },
          top: { lg: '90px' },
          height: { lg: 'calc(100vh - 110px)' },
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        mb={{ xs: '68px', sm: 0, lg: 0 }}
        borderRadius="16px"
        gap="20px"
      >
        <SchedulingTags items={schedulingItems} />
        <PodcastTags items={podcastItems} />
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
