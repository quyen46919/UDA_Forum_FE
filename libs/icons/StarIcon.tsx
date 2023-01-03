import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const StarIcon = (props: SvgIconProps & { status: number }) => {
  const handleStatus = (status: number) => {
    if (status === 0) return '#657ef8'
    return 'none'
  }

  return (
    <SvgIcon
      {...props}
      sx={{
        width: '30px',
        height: '30px',
        fill: handleStatus(props.status),
      }}
      viewBox="0 0 30 30"
    >
      <path
        d="M15.4484 7.77872C15.3641 7.60805 15.1903 7.5 15 7.5C14.8097 7.5 14.6359 7.60805 14.5516 7.77872L12.6107 11.7114L8.27071 12.3421C8.08236 12.3694 7.92589 12.5014 7.86708 12.6824C7.80826 12.8634 7.85731 13.0621 7.9936 13.1949L11.1341 16.2561L10.3927 20.5786C10.3605 20.7662 10.4376 20.9558 10.5916 21.0676C10.7456 21.1795 10.9497 21.1942 11.1182 21.1057L15 19.0649L18.8818 21.1057C19.0503 21.1942 19.2544 21.1795 19.4084 21.0676C19.5624 20.9558 19.6395 20.7662 19.6073 20.5786L18.8659 16.2561L22.0064 13.1949C22.1427 13.0621 22.1917 12.8634 22.1329 12.6824C22.0741 12.5014 21.9176 12.3694 21.7293 12.3421L17.3893 11.7114L15.4484 7.77872Z"
        stroke="#657ef8"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
