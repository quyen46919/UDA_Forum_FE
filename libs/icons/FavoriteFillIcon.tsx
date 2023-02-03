import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const FavoriteFillIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      fill="primary"
      viewBox="0 0 24 24"
    >
      <path d="M13.3499 20.1299C12.5899 20.8199 11.4199 20.8199 10.6599 20.1199L10.5499 20.0199C5.29991 15.2699 1.86991 12.1599 1.99991 8.27992C2.05991 6.57992 2.92991 4.94992 4.33991 3.98992C6.97991 2.18992 10.2399 3.02992 11.9999 5.08992C13.7599 3.02992 17.0199 2.17992 19.6599 3.98992C21.0699 4.94992 21.9399 6.57992 21.9999 8.27992C22.1399 12.1599 18.6999 15.2699 13.4499 20.0399L13.3499 20.1299Z" />
    </SvgIcon>
  )
}
