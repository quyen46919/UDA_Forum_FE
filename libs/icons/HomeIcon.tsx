import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const HomeIcon = (props: SvgIconProps) => {
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
        d="M9.99961 19V14H13.9996V19C13.9996 19.55 14.4496 20 14.9996 20H17.9996C18.5496 20 18.9996 19.55 18.9996 19V12H20.6996C21.1596 12 21.3796 11.43 21.0296 11.13L12.6696 3.59997C12.2896 3.25997 11.7096 3.25997 11.3296 3.59997L2.96961 11.13C2.62961 11.43 2.83961 12 3.29961 12H4.99961V19C4.99961 19.55 5.44961 20 5.99961 20H8.99961C9.54961 20 9.99961 19.55 9.99961 19Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  )
}
