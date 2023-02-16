import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const NotificationIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 40 40">
      <g clipPath="url(#clip0_3960_804)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.3325 23.0613H27.9128C29.069 23.0613 30 23.9747 30 25.1015V25.511C30 25.9648 29.6268 26.3266 29.1661 26.3266H10.8339C10.3729 26.3266 10 25.9613 10 25.511V25.1015C10 23.9752 10.9345 23.0613 12.0872 23.0613H11.6675C12.1255 23.0613 12.4999 22.6955 12.4999 22.2442V17.3469C12.4999 13.2875 15.8578 10 20.0001 10C24.1434 10 27.5003 13.2893 27.5003 17.3469V22.2442C27.5003 22.6983 27.8729 23.0613 28.3327 23.0613H28.3325ZM17.083 27.1429H22.9163C22.9163 28.7208 21.6104 30 19.9997 30C18.3889 30 17.083 28.7208 17.083 27.1429Z"
          fill="inherit"
        />
        <circle cx="26.5" cy="13.5" r="3" fill="red" />
      </g>
      <defs>
        <clipPath id="clip0_3960_804">
          <rect width="20" height="20" fill="white" transform="translate(10 10)" />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}
