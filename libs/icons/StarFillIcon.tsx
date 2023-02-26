import React from 'react'
import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const StarFillIcon = (props: SvgIconProps) => {
  const theme = useTheme()
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
        d="M12 17.5195L16.15 20.0295C16.91 20.4895 17.84 19.8095 17.64 18.9495L16.54 14.2295L20.21 11.0495C20.88 10.4695 20.5199 9.36952 19.6399 9.29952L14.81 8.88952L12.92 4.42952C12.58 3.61952 11.42 3.61952 11.08 4.42952L9.18995 8.87952L4.35995 9.28952C3.47995 9.35952 3.11995 10.4595 3.78995 11.0395L7.45995 14.2195L6.35995 18.9395C6.15995 19.7995 7.08995 20.4795 7.84995 20.0195L12 17.5195Z"
        fill={theme.palette.yellow.main}
      />
    </SvgIcon>
  )
}
