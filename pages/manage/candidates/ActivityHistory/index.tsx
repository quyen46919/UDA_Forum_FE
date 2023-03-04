import EllipsisTypography from '@components/EllipsisTypography'
import { BreakTime } from '@images/index'
import { Avatar, AvatarGroup, Divider, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const timelineData = [
  {
    id: 1,
    time: '09:00',
    users: [
      {
        name: 'Quan Phung',
        avatar: 'QDT',
      },
      {
        name: 'Chau Quyen',
        avatar: 'Q',
      },
    ],
  },
  {
    id: 2,
    time: '10:00',
    users: null,
  },
  {
    id: 3,
    time: '11:00',
    users: [
      {
        name: 'Quan Phung',
        avatar: 'QDT',
      },
      {
        name: 'Chau Quyen',
        avatar: 'Q',
      },
      {
        name: 'Quan Phung',
        avatar: 'QDT',
      },
      {
        name: 'Chau Quyen',
        avatar: 'Q',
      },
      {
        name: 'Quan Phung',
        avatar: 'QDT',
      },
      {
        name: 'Chau Quyen',
        avatar: 'Q',
      },
      {
        name: 'Quan Phung',
        avatar: 'QDT',
      },
      {
        name: 'Chau Quyen',
        avatar: 'Q',
      },
      {
        name: 'Quan Phung',
        avatar: 'QDT',
      },
      {
        name: 'Chau Quyen',
        avatar: 'Q',
      },
      {
        name: 'Quan Phung',
        avatar: 'QDT',
      },
      {
        name: 'Chau Quyen',
        avatar: 'Q',
      },
    ],
  },
  {
    id: 4,
    time: '10:00',
    users: null,
  },
  {
    id: 5,
    time: '10:00',
    users: null,
  },
  {
    id: 6,
    time: '10:00',
    users: null,
  },
  {
    id: 7,
    time: '10:00',
    users: null,
  },
  {
    id: 8,
    time: '10:00',
    users: null,
  },
]

const ActivityHistory = () => {
  const theme = useTheme()

  return (
    <>
      {timelineData?.map((data) => (
        <Stack key={data.id}>
          <Divider
            sx={{
              '&': {
                m: '20px 0',
                '&:after': {
                  top: 0,
                },
                '&:before': {
                  display: 'none',
                },
                '& span': {
                  pl: 0,
                  fontSize: '20px',
                  color: theme.palette.textGrey.main,
                },
              },
            }}
            textAlign="left"
          >
            {data.time}
          </Divider>
          <Stack direction="row" height="70px">
            <Divider
              orientation="vertical"
              sx={{
                borderRightWidth: '5px',
                borderColor: theme.palette.orange.main,
                mr: '10px',
              }}
            />
            {data.users !== null ? (
              <Stack alignItems="flex-start" gap="5px">
                <EllipsisTypography lineNumber={1}>
                  {data.users.map((user, index) => (
                    <React.Fragment key={index}>
                      <Typography component="span">{user.name}</Typography>
                      <Typography component="span">, </Typography>
                    </React.Fragment>
                  ))}
                </EllipsisTypography>
                <Stack>
                  <AvatarGroup
                    max={10}
                    sx={{
                      '& .MuiAvatar-root': {
                        width: '30px',
                        height: '30px',
                      },
                    }}
                  >
                    {data.users.map((user, index) => (
                      <Avatar key={index} src={user.avatar} />
                    ))}
                  </AvatarGroup>
                </Stack>
              </Stack>
            ) : (
              // )
              <Image src={BreakTime} alt="break-time" />
            )}
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ActivityHistory
