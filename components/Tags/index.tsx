import React from 'react'
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemText,
  Stack,
  useTheme,
  Typography,
  useMediaQuery,
  ListItemButton,
} from '@mui/material'
import OverflowTooltip from '@components/Tooltip'

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
    <Stack sx={{ backgroundColor: theme.palette.white.main, borderRadius: '16px', p: '15px' }}>
      <List
        sx={{
          '&.MuiList-root': {
            p: 0,
            '& .MuiListItemButton-root': {
              height: items?.title ? 'unset' : '46px',
              p: '6px 5px',
              borderRadius: '6px',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.palette.backgroundTextGrey.main,
              },
            },
          },
        }}
      >
        <Stack
          gap={downSm ? '3px' : items?.title ? 0 : '10px'}
          direction={downSm ? 'row' : 'column'}
        >
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
          {items?.data
            ? items.data.map((item, index) => {
                return (
                  <ListItemButton key={index}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap={items?.title ? '10px' : '6px'}
                      height={items?.title ? '34px' : '46px'}
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                    >
                      <ListItemAvatar sx={{ minWidth: 0 }}>
                        <Avatar
                          sx={{
                            border: 'none',
                            backgroundColor: theme.palette.backgroundTextGrey.main,
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
                          !downSm && (
                            <OverflowTooltip title={item.secondary}>
                              <Stack
                                fontWeight={400}
                                color={theme.palette.textLightGrey.main}
                                fontSize={items?.title ? '10px' : '9px'}
                                lineHeight={items?.title ? '16px' : '14px'}
                                component="span"
                              >
                                {item.secondary}
                              </Stack>
                            </OverflowTooltip>
                          )
                        }
                      />
                    </Stack>
                  </ListItemButton>
                )
              })
            : ''}
        </Stack>
      </List>
    </Stack>
  )
}

export default Tags
