import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const FiberManualRecordIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '14px',
        height: '14px',
      }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
