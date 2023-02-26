import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ThumbDownOutlineIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      viewBox="0 0 24 24"
    >
      <path
        d="M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.42 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM15 15L10.66 19.34L12 14H3V12L6 5H15V15ZM19 3H23V15H19V3Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
