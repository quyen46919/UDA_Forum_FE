import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const EmojiIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '15px',
        height: '16px',
        fill: 'none',
      }}
      viewBox="0 0 15 16"
    >
      <circle cx="7.5" cy="8" r="7" stroke="#90A3C0" />
      <path
        d="M4 6.71371C4 7.00444 4.1551 7.27308 4.40687 7.41844C4.65865 7.5638 4.96885 7.5638 5.22062 7.41844C5.4724 7.27308 5.6275 7.00444 5.6275 6.71371C5.6275 6.26429 5.26317 5.89996 4.81375 5.89996C4.36433 5.89996 4 6.26429 4 6.71371H4Z"
        fill="#90A3C0"
      />
      <path
        d="M9.59998 6.71371C9.59998 7.16314 9.9643 7.52746 10.4137 7.52746C10.8631 7.52746 11.2275 7.16314 11.2275 6.71371C11.2275 6.26429 10.8631 5.89996 10.4137 5.89996C9.9643 5.89996 9.59998 6.26429 9.59998 6.71371Z"
        fill="#90A3C0"
      />
      <path
        d="M4.69995 10.1C4.69995 10.1 5.6407 11.5 7.50128 11.5C9.36186 11.5 10.3 10.1 10.3 10.1"
        stroke="#90A3C0"
        strokeLinecap="round"
      />
    </SvgIcon>
  )
}
