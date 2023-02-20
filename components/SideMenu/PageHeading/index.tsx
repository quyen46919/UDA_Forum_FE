import React from 'react'
import { useTheme, IconButton, Stack, Typography, Breadcrumbs } from '@mui/material'
import { MenuIcon } from 'libs/icons'
import { useRouter } from 'next/router'
import { capitalizeFirstLetter } from 'libs/utils'
import Link from 'next/link'

type handleDrawerToggle = () => void

interface SideMenuProps {
  handleDrawerToggle: handleDrawerToggle
}

const PageHeading = ({ handleDrawerToggle }: SideMenuProps) => {
  const theme = useTheme()
  const { pathname } = useRouter()
  const pathnames = pathname.split('/').filter((segment) => segment !== '')
  const title = capitalizeFirstLetter(pathnames[pathnames.length - 1] ?? '')

  return (
    <Stack mb="12px">
      <Stack direction="row" mb="16px">
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            p: '6px',
            mb: '12px',
            mr: '6px',
            display: { sm: 'none' },
            width: 'fit-content',
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: '#FF6F00',
              color: 'white',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h1">{title}</Typography>
      </Stack>
      <Stack>
        <Breadcrumbs>
          {pathnames.map((pathname, index) => {
            const first = index === pathnames.indexOf(pathnames[0])
            const last = index === pathnames.length - 1
            const to = `/${pathnames.slice(0, index + 1).join('/')}`
            return first ? (
              <Typography
                sx={{
                  userSelect: 'none',
                  color: theme.palette.textGrey.main,
                  fontSize: '14px',
                }}
                key={to}
              >
                {capitalizeFirstLetter(pathname)}
              </Typography>
            ) : last ? (
              <Link href={to} key={to}>
                <a>
                  <Typography
                    sx={{
                      userSelect: 'none',
                      color: theme.palette.orange.main,
                      fontSize: '14px',
                      fontWeight: 600,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                    key={to}
                  >
                    {capitalizeFirstLetter(pathname)}
                  </Typography>
                </a>
              </Link>
            ) : (
              <Link href={to} key={to}>
                <a>
                  <Typography variant="body1" fontSize="14px" fontWeight={600}>
                    {capitalizeFirstLetter(pathname)}
                  </Typography>
                </a>
              </Link>
            )
          })}
        </Breadcrumbs>
      </Stack>
    </Stack>
  )
}

export default PageHeading
