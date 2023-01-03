import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const LoveIcon = (props: SvgIconProps & { status: Boolean }) => {
  const handleStatus = (status: Boolean) => {
    if (status === true) return '#657ef8'
    return 'none'
  }

  return (
    <SvgIcon
      {...props}
      sx={{
        width: '23px',
        height: '21px',
        fill: handleStatus(props.status),
      }}
      viewBox="0 0 23 21"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.41107 10.1203C0.224944 6.56692 1.61115 2.50548 5.49896 1.3037C7.54401 0.670462 9.8013 1.04383 11.5015 2.27107C13.1099 1.07777 15.4501 0.674705 17.4929 1.3037C21.3807 2.50548 22.7757 6.56692 21.5907 10.1203C19.7447 15.7526 11.5015 20.0909 11.5015 20.0909C11.5015 20.0909 3.31905 15.8184 1.41107 10.1203Z"
        stroke="#858EAD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
