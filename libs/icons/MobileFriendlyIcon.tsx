import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const MobileFriendlyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      viewBox="0 0 24 24"
    >
      <path
        d="M19 1H9C7.9 1 7 1.9 7 3V5C7 5.55 7.45 6 8 6C8.55 6 9 5.55 9 5V4H19V20H9V19C9 18.45 8.55 18 8 18C7.45 18 7 18.45 7 19V21C7 22.1 7.9 23 9 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1ZM7.01 13.47L5.09 11.55C4.74 11.2 4.17 11.2 3.82 11.55C3.47 11.9 3.47 12.47 3.82 12.82L6.29 15.29C6.68 15.68 7.31 15.68 7.7 15.29L13.55 9.44C13.9 9.09 13.9 8.52 13.55 8.17C13.2 7.82 12.63 7.82 12.28 8.17L7.01 13.47Z"
      />
    </SvgIcon>
  )
}
