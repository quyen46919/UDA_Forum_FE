import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ArrowBackIcon = (props: SvgIconProps) => {
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
        d="M19 11H7.83L12.71 6.11997C13.1 5.72997 13.1 5.08997 12.71 4.69997C12.32 4.30997 11.69 4.30997 11.3 4.69997L4.71 11.29C4.32 11.68 4.32 12.31 4.71 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.83 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
