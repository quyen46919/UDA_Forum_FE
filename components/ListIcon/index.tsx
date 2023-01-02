import React from 'react'
import { Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { StackProps } from '@mui/material/Stack'
import { CalendarIcon, GroupIcon, HomeIcon, InterviewsIcon, PodcastsIcon } from 'public/icons'

const ListIcon = (props: StackProps) => {
  return (
    <Stack {...props}>
      <IconButton>
        <HomeIcon color="lightGrey" />
      </IconButton>
      <IconButton>
        <CalendarIcon color="lightGrey" />
      </IconButton>
      <IconButton>
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
