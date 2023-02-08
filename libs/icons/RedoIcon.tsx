import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const RedoIcon = (props: SvgIconProps) => {
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
        d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.33998 8 3.75998 10.42 2.05998 13.93C1.73998 14.6 2.09998 15.4 2.80998 15.64C3.39998 15.84 4.03998 15.56 4.30998 15C5.60998 12.34 8.33998 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
