import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'
import { red, green, yellow } from '@mui/material/colors'
import { ACTIVATE_STATUS } from '@enums/index'

export const ActivationIcon = (props: SvgIconProps & { status: number }) => {
  const handleStatus = (status: number) => {
    if (status === ACTIVATE_STATUS.ONLINE) return green[600]
    if (status === ACTIVATE_STATUS.OFFLINE) return yellow[600]
    return red[600]
  }

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
