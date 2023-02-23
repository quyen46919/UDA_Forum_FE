import React from 'react'
import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const CloseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} sx={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
      <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.11 5.69997C6.72 5.30997 6.09 5.30997 5.7 5.69997C5.31 6.08997 5.31 6.71997 5.7 7.10997L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" />
    </SvgIcon>
  )
}
