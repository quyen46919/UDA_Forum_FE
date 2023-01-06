import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const LikeOutlineIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      fill="black"
      viewBox="0 0 24 24"
    >
      <path
        d="M8 20L17 20C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11L22 9C22 7.9 21.1 7 20 7L13.69 7L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 -7.71943e-07L6.58 6.59C6.22 6.95 6 7.45 6 8L6 18C6 19.1 6.9 20 8 20ZM8 8L12.34 3.66L11 9L20 9L20 11L17 18L8 18L8 8ZM4 20L0 20L1.04907e-06 8L4 8L4 20Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
