import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const PeopleAltIcon = (props: SvgIconProps) => {
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
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M16.67 13.1299C18.04 14.0599 19 15.3199 19 16.9999V19.9999H22C22.55 19.9999 23 19.5499 23 18.9999V16.9999C23 14.8199 19.43 13.5299 16.67 13.1299Z"
        fill="black"
        fillOpacity="0.54"
      />
      <path
        d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"
        fill="black"
        fillOpacity="0.54"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12Z"
        fill="black"
        fillOpacity="0.54"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M9 13C6.33 13 1 14.34 1 17V19C1 19.55 1.45 20 2 20H16C16.55 20 17 19.55 17 19V17C17 14.34 11.67 13 9 13Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
