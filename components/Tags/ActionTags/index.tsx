import React from 'react'
import {
  List,
  ListItemText,
  Stack,
  useTheme,
  Typography,
  useMediaQuery,
  ListItemButton,
} from '@mui/material'
import Link from 'next/link'

declare type ItemProps = {
  icon: JSX.Element
  primary: string
  href?: string | undefined
}

interface TagsProps {
  items: { title?: string } & { data: ItemProps[] }
}

const ActionTags = ({ items }: TagsProps) => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack sx={{ backgroundColor: theme.palette.white.main, borderRadius: '16px', p: '15px' }}>
      <List
        sx={{
          '&.MuiList-root': {
            p: 0,
            '& .MuiListItemButton-root': {
              p: '6px 5px',
              borderRadius: '12px',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#eff2ff',
              },
            },
          },
        }}
      >
        <Stack gap={downSm ? '3px' : items?.title ? 0 : '10px'} direction="column">
          {items?.title && (
            <Typography
              sx={{ userSelect: 'none' }}
              variant="h1"
              pb="6px"
              fontWeight={600}
              fontSize="16px"
              lineHeight="24px"
              display="flex"
              alignItems="center"
              gap="3px"
            >
              {items.title}
            </Typography>
          )}
          <Stack
            direction="row"
            sx={{
              '& svg': {
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                mb: '12px',
              },
              '& a': {
                flex: 1,
              },
              '& a:first-child svg': {
                backgroundColor: '#18d2da33',
              },
              '& a:nth-child(2) svg': {
                backgroundColor: '#3db8f533',
              },
              '& a:last-child svg': {
                backgroundColor: '#ffcf3933',
              },
            }}
          >
            {items?.data
              ? items.data.map((item, index) => {
                  return (
                    <Link key={index} href={item.href ? item.href : ''}>
                      <a>
                        <ListItemButton sx={{ flexDirection: 'column' }}>
                          {item.icon}
                          <ListItemText
                            sx={{
                              '&': {
                                m: 0,
                                '& div .MuiTypography-body1': {
                                  fontSize: '12px',
                                  lineHeight: '18px',
                                  fontWeight: 600,
                                },
                              },
                            }}
                            disableTypography
                            primary={<Typography variant="body1">{item.primary}</Typography>}
                          />
                        </ListItemButton>
                      </a>
                    </Link>
                  )
                })
              : ''}
          </Stack>
        </Stack>
      </List>
    </Stack>
  )
}

export default ActionTags
