import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const FollowingIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} sx={{ width: '28px', height: '28px' }} viewBox="0 0 28 28" fill="none">
      {/* <rect width="28" height="28" rx="6" fill="#2C353D" /> */}
      <path
        d="M17 9C17 6.79066 15.2089 5 13 5C10.7911 5 9 6.79066 9 9C9 11.2093 10.7911 13 13 13C15.2089 13 17 11.2093 17 9Z"
        fill="#FF6934"
      />
      <path
        d="M16 13C15.2357 13.5784 14.0266 14 13 14C11.9535 14 10.7718 13.5987 10 13C5.10197 14.179 4.91052 18.2341 5.0085 21.979C5.0247 22.5984 5.3724 23.0001 6 23.0001L15 23V20.0001C15 18.9814 15.307 18.0001 17 18.0001L20.5 18C20.5 15 18.5 13 16 13Z"
        fill="#FF6934"
      />
      <path
        d="M17 21H23M23 21L21.5 19.5M23 21L21.5 22.5"
        stroke="#FF6934"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
