import React from 'react'
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  Stack,
  useTheme,
  Typography,
  ListItemButton,
  Chip,
  Tooltip,
} from '@mui/material'
import { ArrowRightIcon } from 'libs/icons'
import Link from 'next/link'
import EllipsisTypography from '@components/EllipsisTypography'

interface ChipData {
  label: string
}

interface ItemProps {
  primary: string
  primaryMobile?: string | undefined
  secondary: string
  avatar: string
  tags: ChipData[]
}

interface TagsProps {
  items: { title?: string; href: string } & { data: ItemProps[] }
}

const SchedulingTags = ({ items }: TagsProps) => {
  const theme = useTheme()

  return (
    <Stack sx={{ backgroundColor: theme.palette.white.main, borderRadius: '16px', p: '15px' }}>
      <List
        sx={{
          '&.MuiList-root': {
            p: 0,
            '& div > .MuiListItemButton-root': {
              minHeight: '78px',
              p: '5px 5px',
              borderRadius: '6px',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#f4f6f8',
              },
            },
          },
        }}
      >
        <Stack gap="10px">
          {items?.title && (
            <Link href={items.href}>
              <a>
                <Typography
                  variant="h1"
                  fontWeight={600}
                  fontSize="16px"
                  lineHeight="24px"
                  display="flex"
                  alignItems="center"
                  margin="5px 0 5px 0"
                  gap="3px"
                  sx={{ cursor: 'pointer' }}
                >
                  {items.title}
                  <ArrowRightIcon />
                </Typography>
              </a>
            </Link>
          )}
          {items?.data
            ? items.data.map((item, index) => (
                <ListItemButton key={index}>
                  <Stack direction="row" alignItems="flex-start" gap="14px">
                    <Stack
                      height="68px"
                      width="44px"
                      borderRadius="6px"
                      textAlign="center"
                      border="1px solid #f5f7f9"
                      boxShadow="0px 6px 6px 2px rgba(71, 153, 235, 0.04)"
                    >
                      <Typography
                        marginTop="4px"
                        textTransform="uppercase"
                        fontSize="14px"
                        lineHeight="22px"
                        fontWeight={600}
                      >
                        feb
                      </Typography>
                      <Typography
                        fontSize="26px"
                        lineHeight="38px"
                        fontWeight={700}
                        color={theme.palette.blue.main}
                        marginBottom="4px"
                      >
                        7
                      </Typography>
                    </Stack>
                    <Stack minHeight="68px" gap="10px">
                      <ListItemText
                        sx={{
                          '&': {
                            display: 'flex',
                            flexDirection: 'column',
                            m: 0,
                            '& .MuiTypography-body1': {
                              fontSize: '14px',
                              lineHeight: '22px',
                              fontWeight: 600,
                              mb: '2px',
                            },
                            '& .MuiTypography-body2': {
                              borderRadius: '2px',
                              color: '#97989D',
                              fontSize: '10px',
                              lineHeight: '16px',
                              fontWeight: 600,
                            },
                          },
                        }}
                        disableTypography
                        primary={
                          <Tooltip title={item.primary}>
                            <EllipsisTypography variant="body1" lineNumber={1}>
                              {item.primary}
                            </EllipsisTypography>
                          </Tooltip>
                        }
                        secondary={
                          <Stack direction="row" alignItems="center" gap="6px">
                            <Avatar
                              sx={{ width: '16px', height: '16px', borderRadius: '8px' }}
                              alt="Avatar"
                              src={item?.avatar}
                            />
                            <Tooltip title={item.secondary}>
                              <EllipsisTypography variant="body2" lineNumber={1}>
                                {item.secondary}
                              </EllipsisTypography>
                            </Tooltip>
                          </Stack>
                        }
                      />
                      <List
                        disablePadding
                        sx={{
                          minHeight: '18px',
                          maxWidth: '250px',
                          display: 'flex',
                          gap: '10px',
                          flexWrap: 'wrap',
                        }}
                      >
                        {item.tags.map((data, index) => (
                          <ListItem sx={{ width: 'unset' }} disablePadding key={index}>
                            <Chip
                              sx={{
                                backgroundColor: '#f5f5f8',
                                height: '18px',
                                p: '2px 8px',
                                '& span': {
                                  p: 0,
                                  fontSize: '9px',
                                  lineHeight: '14px',
                                  fontWeight: 600,
                                  color: '#b6bac6',
                                  cursor: 'pointer',
                                },
                              }}
                              label={data.label}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Stack>
                  </Stack>
                </ListItemButton>
              ))
            : ''}
        </Stack>
      </List>
    </Stack>
  )
}

export default SchedulingTags
