import React from 'react'
import { Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import HomeIcon from 'public/icons/HomeIcon'
import CalendarIcon from 'public/icons/CalendarIcon'
import GroupIcon from 'public/icons/GroupIcon'
import PodcastsIcon from 'public/icons/PodcastsIcon'
import InterviewsIcon from 'public/icons/InterviewsIcon'
import { StackProps } from '@mui/material/Stack'

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
