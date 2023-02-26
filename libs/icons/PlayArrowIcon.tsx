import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const PlayArrowIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      viewBox="0 0 24 24"
    >
      <path d="M8 6.81999V17.18C8 17.97 8.87 18.45 9.54 18.02L17.68 12.84C18.3 12.45 18.3 11.55 17.68 11.15L9.54 5.97999C8.87 5.54999 8 6.02999 8 6.81999Z" />
    </SvgIcon>
  )
}
