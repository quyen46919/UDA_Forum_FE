import React from 'react'
import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const ArrowRightIcon = (props: SvgIconProps) => {
  const theme = useTheme()

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
        d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15"
        stroke={theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.black.main}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
