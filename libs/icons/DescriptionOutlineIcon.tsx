import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const DescriptionOutlineIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
