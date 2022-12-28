import * as React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { LayoutProps } from './layout'
import Header from '@components/Header'
import ListIcon from '@components/ListIcon'

export function MainLayout(props: LayoutProps) {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      <Header />
      {props.children}
      {downSm && (
        <ListIcon
          direction="row"
          alignItems="center"
          gap="20px"
          justifyContent="center"
          height="68px"
          position="fixed"
          bottom="0%"
          left="0%"
          width="100%"
          sx={{ backgroundColor: theme.palette.white.main }}
        />
      )}
    </div>
  )
}
