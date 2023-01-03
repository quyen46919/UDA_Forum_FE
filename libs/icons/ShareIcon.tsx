import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ShareIcon = (props: SvgIconProps & { status: Boolean }) => {
  const handleStatus = (status: Boolean) => {
    if (status === true) return '#657ef8'
    return 'none'
  }

  return (
    <SvgIcon
      {...props}
      sx={{
        width: '28px',
        height: '27px',
        fill: handleStatus(props.status),
      }}
      viewBox="0 0 28 27"
    >
      <path
        d="M4.38903 22.3059L4.8705 22.1711C4.62637 21.2995 4.5 20.3213 4.5 19.2617C4.5 13.6008 7.99807 9.59448 13.0745 9.12153L13.5281 9.07927V8.62368V4.94957C13.5281 4.77567 13.6294 4.61645 13.7885 4.54255C13.9492 4.46797 14.137 4.49292 14.2725 4.60592C14.2726 4.60599 14.2727 4.60606 14.2728 4.60613L23.3392 12.2056C23.4411 12.291 23.5 12.4172 23.5 12.5504C23.5 12.6828 23.4414 12.8087 23.3393 12.8944C23.3393 12.8945 23.3392 12.8945 23.3392 12.8945L14.2733 20.4935C14.273 20.4937 14.2728 20.4939 14.2726 20.4941C14.136 20.6074 13.9483 20.6317 13.7892 20.5579C13.6293 20.4834 13.528 20.3237 13.528 20.15V16.5722V16.0146L12.9738 16.0751C9.38812 16.4664 6.70564 18.6962 5.74294 22.1694C5.68858 22.3642 5.5107 22.4998 5.30753 22.5H5.30653C5.10299 22.5 4.92484 22.3644 4.87038 22.1706L4.38903 22.3059ZM4.38903 22.3059C4.50425 22.7159 4.87947 23 5.30653 23H5.30802L13.578 4.08902C13.2428 4.24467 13.0281 4.58057 13.0281 4.94957V8.62368C7.6656 9.12329 4 13.3729 4 19.2617C4 20.3603 4.13095 21.3845 4.38903 22.3059ZM20.2204 12.643L20.2187 12.6452C20.0257 12.8849 19.7418 13.0102 19.4563 13.0102C19.2428 13.0102 19.0285 12.9406 18.8494 12.7989L18.8482 12.798L15.5149 10.146L15.5146 10.1458C15.0926 9.80962 15.024 9.19567 15.3604 8.77507L15.3606 8.77482C15.6981 8.35344 16.3113 8.28692 16.7312 8.62029L16.7316 8.62062L20.0645 11.2722L20.2204 12.643ZM20.2204 12.643C20.555 12.2225 20.4882 11.6089 20.065 11.2726L20.2204 12.643Z"
        stroke={props.status === true ? '#657ef8' : '#858EAD'}
      />
      <rect
        x="13.041"
        y="10.3651"
        width="4.51689"
        height="7.84276"
        transform="rotate(-50.3067 13.041 10.3651)"
        fill={props.status === true ? '#657ef8' : '#FFFFFF'}
      />
    </SvgIcon>
  )
}