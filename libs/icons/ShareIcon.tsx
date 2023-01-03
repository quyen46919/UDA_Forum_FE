import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ShareIcon = (props: SvgIconProps & { status: number }) => {
  const handleStatus = (status: number) => {
    if (status === 0) return '#657ef8'
    return 'black'
  }

  return (
    <SvgIcon
      {...props}
      sx={{
        width: '28px',
        height: '27px',
      }}
      viewBox="0 0 28 27"
    >
      <path
        d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"
        fill={handleStatus(props.status)}
        fillOpacity={props.status === 0 ? 1 : '0.54'}
      />
    </SvgIcon>
  )
}
