import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} sx={{ width: '20px', height: '20px' }} viewBox="0 0 20 20">
      <circle cx="10" cy="9" r="8" stroke="#858EAD" strokeWidth="2" fill="none" />
      <path d="M15.5 15.5L19.5 19.5" stroke="#858EAD" strokeWidth="2" strokeLinecap="round" />
    </SvgIcon>
  )
}
