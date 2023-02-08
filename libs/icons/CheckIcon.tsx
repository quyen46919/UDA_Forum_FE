import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const CheckIcon = (props: SvgIconProps) => {
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
        d="M9 16.1701L5.53 12.7001C5.14 12.3101 4.51 12.3101 4.12 12.7001C3.73 13.0901 3.73 13.7201 4.12 14.1101L8.3 18.2901C8.69 18.6801 9.32 18.6801 9.71 18.2901L20.29 7.71007C20.68 7.32007 20.68 6.69007 20.29 6.30007C19.9 5.91007 19.27 5.91007 18.88 6.30007L9 16.1701Z"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
