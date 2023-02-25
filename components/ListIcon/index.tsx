import React from 'react'
import { Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { StackProps } from '@mui/material/Stack'
import { useRouter } from 'next/router'
import { CalendarIcon, GroupIcon, HomeIcon, MicIcon, PodcastsIcon } from 'libs/icons'

const ListIcon = (props: StackProps) => {
  const router = useRouter()
  return (
    <Stack {...props}>
      <IconButton onClick={() => router.push('/')} color="lightGrey">
        <HomeIcon />
      </IconButton>
      <IconButton color="lightGrey">
        <CalendarIcon />
      </IconButton>
      <IconButton onClick={() => router.push('/forum')} color="lightGrey">
        <GroupIcon />
      </IconButton>
      <IconButton color="lightGrey">
        <PodcastsIcon />
      </IconButton>
      <IconButton color="lightGrey">
        <MicIcon />
      </IconButton>
    </Stack>
  )
}

export default ListIcon
