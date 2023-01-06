import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const CommentIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
        fill: 'none',
      }}
      viewBox="0 0 24 24"
    >
      <path
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM19 16H6L4 18V5C4 4.45 4.45 4 5 4H19C19.55 4 20 4.45 20 5V15C20 15.55 19.55 16 19 16Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
