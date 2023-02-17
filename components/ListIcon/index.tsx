import React from 'react'
import { Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { StackProps } from '@mui/material/Stack'
import { useRouter } from 'next/router'
import { CalendarIcon, GroupIcon, HomeIcon, InterviewsIcon, PodcastsIcon } from 'libs/icons'

const ListIcon = (props: StackProps) => {
  const router = useRouter()
  return (
    <Stack {...props}>
      <IconButton onClick={() => router.push('/')}>
        <HomeIcon color="lightGrey" />
      </IconButton>
      <IconButton>
        <CalendarIcon color="lightGrey" />
      </IconButton>
      <IconButton onClick={() => router.push('/forum')}>
        <GroupIcon color="lightGrey" />
      </IconButton>
      <IconButton>
        <PodcastsIcon color="lightGrey" />
      </IconButton>
      <IconButton>
        <InterviewsIcon color="lightGrey" />
      </IconButton>
    </Stack>
  )
}

export default ListIcon
