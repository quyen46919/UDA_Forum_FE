import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const VerifyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      viewBox="0 0 24 24"
    >
      <path d="M11.19 1.36L4.19 4.47C3.47 4.79 3 5.51 3 6.3V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6.3C21 5.51 20.53 4.79 19.81 4.47L12.81 1.36C12.3 1.13 11.7 1.13 11.19 1.36ZM9.29 16.29L6.7 13.7C6.31 13.31 6.31 12.68 6.7 12.29C7.09 11.9 7.72 11.9 8.11 12.29L10 14.17L15.88 8.29C16.27 7.9 16.9 7.9 17.29 8.29C17.68 8.68 17.68 9.31 17.29 9.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" />
    </SvgIcon>
  )
}
