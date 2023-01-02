import React from 'react'
import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const TutorialIcon = (props: SvgIconProps) => {
  const theme = useTheme()

  return (
    <SvgIcon {...props} sx={{ width: '32px', height: '32px', fill: 'none' }} viewBox="0 0 32 32">
      <rect
        width="32"
        height="32"
        rx="4"
        fill={theme.palette.mode === 'dark' ? '#335248' : '#E7FAF3'}
      />
      <path
        d="M16.6949 26C11.0734 26 6.5 21.5141 6.5 16.0002C6.5 10.4862 11.0734 6 16.6949 6C19.7586 6 22.6319 7.33335 24.5776 9.65811C24.9555 10.1094 25.0376 10.6294 24.5776 11.0001C24.2533 11.2615 23.6816 11.2171 23.5 11.0001C21.965 9.16634 19.5 7.5 16.6946 7.5C12.2617 7.5 8 11.652 8 16.0001C8 20.3481 12.2616 24.5 16.6946 24.5C19.479 24.5 22.5175 22.5024 24 20.1857C24.3165 19.6912 24.7357 19.6927 24.995 19.8524C25.5364 20.1857 25.6514 20.8154 25.3349 21.3098C23.4556 24.2468 20.2253 26 16.6949 26Z"
        fill="#3ED6A4"
      />
      <path d="M14.5 11L21.5 15.7181L14.5 20V11Z" fill="#3ED6A4" />
    </SvgIcon>
  )
}
