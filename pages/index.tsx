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
import Post from '@components/Post'

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

const data = [
  {
    avatar:
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
    name: 'Anna Li',
    activation: 0,
    following: false,
    savePost: true,
    title: 'Hello everyone',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitadipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: 9800,
    comments: 12300,
    saved: 460,
    liked: true,
    shared: false,
    createdAt: '2022-05-10T23:55:37.168Z',
    images: [
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
    ],
  },
  {
    avatar:
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
    name: 'Anna Li',
    activation: 2,
    following: true,
    savePost: false,
    title: 'This is Title',
    content: 'This is content',
    likes: 12,
    comments: 6,
    saved: 2,
    liked: false,
    shared: false,
    createdAt: '2022-05-10T23:55:37.168Z',
    images: [
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
      'https://img.freepik.com/free-photo/sleeping-beagle-dog-puppy-blue-background_1150-18196.jpg?w=1380&t=st=1672927565~exp=1672928165~hmac=2ea4cb3bb284da32f9590b1a7ef90ff7b11eb13b38d1914fd8f235bedc9457f7',
    ],
  },
  {
    avatar:
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
    name: 'Anna Li',
    activation: 1,
    following: true,
    savePost: true,
    title: 'This is Title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo soluta veniam corrupti nostrum, quaerat fugiat voluptate autem laboriosam blanditiis magnam suscipit numquam sint, dolorem nihil? Labore illum nihil quae.',
    likes: 9800,
    comments: 12300,
    saved: 460,
    liked: false,
    shared: true,
    createdAt: '2022-05-10T23:55:37.168Z',
    images: [
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
    ],
  },
  {
    avatar:
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
    name: 'Anna Li',
    activation: 1,
    following: true,
    savePost: true,
    title: 'This is Title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo soluta veniam corrupti nostrum, quaerat fugiat voluptate autem laboriosam blanditiis magnam suscipit numquam sint, dolorem nihil? Labore illum nihil quae.',
    likes: 9800,
    comments: 12300,
    saved: 460,
    liked: true,
    shared: false,
    createdAt: '2022-05-10T23:55:37.168Z',
    images: [
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
      'https://img.freepik.com/free-photo/sleeping-beagle-dog-puppy-blue-background_1150-18196.jpg?w=1380&t=st=1672927565~exp=1672928165~hmac=2ea4cb3bb284da32f9590b1a7ef90ff7b11eb13b38d1914fd8f235bedc9457f7',
      'https://img.freepik.com/free-vector/marine-life-cute-element-animal-life-sea-underwater-animal-creature-turtle_1150-65299.jpg?t=st=1672977290~exp=1672977890~hmac=d056f539e612e326cff02ae2177abbc9ef6223d699c482862ce697591a0a3818',
    ],
  },
  {
    avatar:
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
    name: 'Anna Li',
    activation: 1,
    following: true,
    savePost: true,
    title: 'This is Title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo soluta veniam corrupti nostrum, quaerat fugiat voluptate autem laboriosam blanditiis magnam suscipit numquam sint, dolorem nihil? Labore illum nihil quae.',
    likes: 9800,
    comments: 12300,
    saved: 460,
    liked: true,
    shared: false,
    createdAt: '2022-05-10T23:55:37.168Z',
    images: [
      'https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
      'https://img.freepik.com/free-photo/sleeping-beagle-dog-puppy-blue-background_1150-18196.jpg?w=1380&t=st=1672927565~exp=1672928165~hmac=2ea4cb3bb284da32f9590b1a7ef90ff7b11eb13b38d1914fd8f235bedc9457f7',
      'https://img.freepik.com/free-vector/marine-life-cute-element-animal-life-sea-underwater-animal-creature-turtle_1150-65299.jpg?t=st=1672977290~exp=1672977890~hmac=d056f539e612e326cff02ae2177abbc9ef6223d699c482862ce697591a0a3818',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
      'https://img.freepik.com/free-photo/sleeping-beagle-dog-puppy-blue-background_1150-18196.jpg?w=1380&t=st=1672927565~exp=1672928165~hmac=2ea4cb3bb284da32f9590b1a7ef90ff7b11eb13b38d1914fd8f235bedc9457f7',
      'https://img.freepik.com/free-vector/free-wording-comic-speech-bubble-pop-art-style_1150-39958.jpg?w=1380&t=st=1672932606~exp=1672933206~hmac=f17905f3edcfbef8d1ad7e4595ba6f899d38e509a9df4b81741bcee5a69277df',
    ],
  },
]

const Home: NextPageWithLayout = () => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack
      sx={{ backgroundColor: theme.palette.secondary.main }}
      direction={{ xs: 'column', lg: 'row' }}
      minHeight="calc(100vh - 80px)"
      p={{ xs: '20px', lg: '20px 40px 0 40px' }}
      gap="20px"
      maxWidth={{ lg: '1536px', xl: '1920px' }}
    >
      <Stack
        width={{ lg: '210px' }}
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
        borderRadius="16px"
        gap="20px"
      >
        <Tags items={items} />
        {!downSm && <Tags items={popularItems} />}
        {!downSm && <Tags items={pinnedGroupTag} />}
      </Stack>

      <Stack flex="1" borderRadius="16px" gap={{ xs: 0, lg: '20px' }} marginBottom="20px">
        <Post data={data} />
      </Stack>
      <Stack
        width={{ lg: '325px' }}
        sx={{
          position: { lg: 'sticky' },
          top: { lg: '100px' },
          height: { lg: 'calc(100vh - 120px)' },
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        mb={{ xs: '68px', lg: 0 }}
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
