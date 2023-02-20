import React from 'react'
import {
  BusinessBagIcon,
  CalendarOutlineIcon,
  DashboardIcon,
  DescriptionOutlineIcon,
  InfoIcon,
  PeopleAltOutlineIcon,
  SettingIcon,
} from 'libs/icons'

export const menu = [
  {
    icon: <DashboardIcon />,
    title: 'Dashboard',
    path: '/manage/dashboard',
  },
  {
    icon: <BusinessBagIcon />,
    title: 'Jobs',
    path: '/manage/jobs',
  },
  {
    icon: <PeopleAltOutlineIcon />,
    title: 'Candidates',
    path: '/manage/candidates',
  },
  {
    icon: <CalendarOutlineIcon />,
    title: 'Calendar',
    path: '/manage/calendar',
  },
  {
    icon: <DescriptionOutlineIcon />,
    title: 'Document',
    path: '/manage/document',
  },
]

export const subMenu = [
  {
    icon: <SettingIcon />,
    title: 'Setting',
    path: '/manage/setting',
  },
  {
    icon: <InfoIcon />,
    title: 'Support',
    path: '/manage/support',
  },
]
