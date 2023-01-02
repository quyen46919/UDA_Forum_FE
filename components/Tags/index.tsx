import React from 'react'
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useTheme,
  Typography,
  useMediaQuery,
} from '@mui/material'

declare type ItemProps = {
  icon: JSX.Element
  primary: string
  primaryMobile?: string | undefined
  secondary: string
  notificationNumber?: number | undefined
}

interface TagsProps {
  items: { title?: string } & { data: ItemProps[] }
}

const Tags = ({ items }: TagsProps) => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack sx={{ backgroundColor: theme.palette.white.main, borderRadius: '16px' }}>
      <List
        sx={{
          '&.MuiList-root': {
            padding: items?.title ? '20px' : '10px',
            '& li': {
              height: items?.title ? '34px' : '46px',
              p: !items?.title ? '6px 5px' : 0,
              borderRadius: '6px',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: !items?.title ? '#f4f6f8' : '',
              },
            },
          },
        }}
      >
        <Stack gap={downSm ? '3px' : '10px'} direction={downSm ? 'row' : 'column'}>
          {items?.title && (
            <Typography
              variant="h1"
              marginBottom="10px"
              fontWeight={600}
              fontSize="16px"
              lineHeight="24px"
            >
              Popular Tags
            </Typography>
          )}
          {items?.data
            ? items.data.map((item, index) => (
                <ListItem key={index}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap={items?.title ? '10px' : '6px'}
                    height={items?.title ? '34px' : '46px'}
                  >
                    <ListItemAvatar sx={{ minWidth: 0 }}>
                      <Avatar
                        sx={{
                          border: 'none',
                          backgroundColor: '#f4f6f8',
                          p: 0,
                          width: items?.title ? '32px' : '28px',
                          height: items?.title ? '32px' : '28px',
                        }}
                      >
                        {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{
                        '&': {
                          display: 'flex',
                          flexDirection: 'column',
                          m: 0,
                          '& div .MuiTypography-body1': {
                            fontSize: '12px',
                            lineHeight: '18px',
                            fontWeight: 600,
                            mb: !items.title && !downSm ? '2px' : 0,
                          },
                          '& div .MuiTypography-body2': item?.notificationNumber
                            ? {
                                width: '22px',
                                height: '20px',
                                borderRadius: '2px',
                                backgroundColor: theme.palette.orange.main,
                                color: theme.palette.white.main,
                                fontSize: '9px',
                                lineHeight: '14px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: downSm ? 0 : '2px',
                              }
                            : '',
                          '& span': items?.title
                            ? {
                                fontSize: '10px',
                                lineHeight: '16px',
                                fontWeight: 400,
                                color: '#c1c1c3',
                              }
                            : {
                                fontSize: '9px',
                                lineHeight: '14px',
                                fontWeight: 400,
                                color: '#c1c1c3',
                              },
                        },
                      }}
                      disableTypography
                      primary={
                        <Stack direction="row" alignItems="center" gap="4px">
                          <Typography variant="body1">
                            {downSm ? item?.primaryMobile : item.primary}
                          </Typography>
                          <Typography variant="body2">
                            {item?.notificationNumber && item?.notificationNumber >= 100
                              ? '99+'
                              : item.notificationNumber}
                          </Typography>
                        </Stack>
                      }
                      secondary={
                        !downSm && <Typography component="span">{item.secondary}</Typography>
                      }
                    />
                  </Stack>
                </ListItem>
              ))
            : ''}
        </Stack>
      </List>
    </Stack>
  )
}

export default Tags
