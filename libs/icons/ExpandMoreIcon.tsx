import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ExpandMoreIcon = (props: SvgIconProps) => {
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
        d="M15.88 9.29006L12 13.1701L8.12 9.29006C7.73 8.90006 7.1 8.90006 6.71 9.29006C6.32 9.68006 6.32 10.3101 6.71 10.7001L11.3 15.2901C11.69 15.6801 12.32 15.6801 12.71 15.2901L17.3 10.7001C17.69 10.3101 17.69 9.68006 17.3 9.29006C16.91 8.91006 16.27 8.90006 15.88 9.29006Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
