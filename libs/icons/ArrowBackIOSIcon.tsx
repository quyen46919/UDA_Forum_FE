import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ArrowBackIOSIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '20px',
        height: '20px',
        fill: 'none',
      }}
      viewBox="0 0 20 20"
    >
      <path
        d="M16.62 2.99006C16.13 2.50006 15.34 2.50006 14.85 2.99006L6.54 11.3001C6.15 11.6901 6.15 12.3201 6.54 12.7101L14.85 21.0201C15.34 21.5101 16.13 21.5101 16.62 21.0201C17.11 20.5301 17.11 19.7401 16.62 19.2501L9.38 12.0001L16.63 4.75006C17.11 4.27006 17.11 3.47006 16.62 2.99006Z"
        fill="black"
      />
    </SvgIcon>
  )
}