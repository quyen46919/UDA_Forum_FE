import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'
import { handleStatus } from 'libs/utils'

export const ActivationIcon = (props: SvgIconProps & { status: number }) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '5px',
        height: '6px',
        fill: 'none',
      }}
      viewBox="0 0 5 6"
    >
      <circle cx="2.5" cy="3" r="2.5" fill={handleStatus(props.status)} />
    </SvgIcon>
  )
}
