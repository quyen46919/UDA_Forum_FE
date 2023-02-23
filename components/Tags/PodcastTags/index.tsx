import React from 'react'
import {
  List,
  ListItemText,
  Stack,
  useTheme,
  Typography,
  ListItemButton,
  Tooltip,
} from '@mui/material'
import Link from 'next/link'
import { ArrowRightIcon } from 'libs/icons'
import EllipsisTypography from '@components/EllipsisTypography'
interface ItemProps {
  img?: string | undefined
  primary: string
  secondary: string
}

interface PodcastTags {
  items: { title?: string | undefined; href: string } & { data: ItemProps[] }
}

const PodcastTags = ({ items }: PodcastTags) => {
  const theme = useTheme()

  return (
    <Stack sx={{ backgroundColor: theme.palette.white.main, borderRadius: '16px', p: '15px' }}>
      <List
        sx={{
          '&.MuiList-root': {
            p: 0,
            '& div > .MuiListItemButton-root': {
              height: '68px',
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
            <Link href={items?.href}>
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
                  <Stack direction="row" alignItems="center" width="100%" gap="14px">
                    <Stack
                      component="img"
                      width="58px"
                      height="58px"
                      borderRadius="4px"
                      src={item.img}
                      alt="podcastImg"
                    />
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      height="58px"
                      gap="10px"
                      width="100%"
                    >
                      <ListItemText
                        sx={{
                          '&': {
                            display: 'flex',
                            flexDirection: 'column',
                            m: 0,
                            '& .MuiTypography-body1': {
                              fontSize: '12px',
                              lineHeight: '18px',
                              fontWeight: 600,
                              mb: '6px',
                            },
                            '& .MuiTypography-body2': {
                              color: '#97989D',
                              fontSize: '10px',
                              lineHeight: '16px',
                              fontWeight: 600,
                            },
                          },
                        }}
                        disableTypography
                        primary={
                          <EllipsisTypography
                            variant="body1"
                            maxHeight="36px"
                            maxWidth="250px"
                            lineNumber={2}
                            tooltipTitle={item.primary}
                          >
                            {item.primary}
                          </EllipsisTypography>
                        }
                        secondary={
                          <EllipsisTypography
                            tooltipTitle={item.secondary}
                            variant="body2"
                            maxWidth="230px"
                          >
                            {item.secondary}
                          </EllipsisTypography>
                        }
                      />
                      <ArrowRightIcon />
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

export default PodcastTags
