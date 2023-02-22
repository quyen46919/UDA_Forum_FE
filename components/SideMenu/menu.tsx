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
    title: 'Công việc',
    path: '/manage/jobs',
  },
  {
    icon: <PeopleAltOutlineIcon />,
    title: 'Ứng cử viên',
    path: '/manage/candidates',
  },
  {
    icon: <CalendarOutlineIcon />,
    title: 'Lịch',
    path: '/manage/calendar',
  },
  {
    icon: <DescriptionOutlineIcon />,
    title: 'Tài liệu',
    path: '/manage/document',
  },
]

export const subMenu = [
  {
    icon: <SettingIcon />,
    title: 'Cài đặt',
    path: '/manage/setting',
  },
  {
    icon: <InfoIcon />,
    title: 'Hỗ trợ',
    path: '/manage/support',
  },
]
