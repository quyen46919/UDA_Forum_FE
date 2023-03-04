import React from 'react'
import DateSelector from '@components/DateSelector'
import { IconButton, Stack, Typography, useTheme } from '@mui/material'
import { CloseIcon } from 'libs/icons'
import ActivityHistory from '../ActivityHistory'

type HandleSidebarToggleProps = {
  handleSidebarToggle?: () => void
}

const EnrollmentTimeline = ({ handleSidebarToggle }: HandleSidebarToggleProps) => {
  const theme = useTheme()

  return (
    <Stack
      sx={{
        padding: { xs: '15px', sm: '20px', lg: 0 },
        overflowY: 'scroll',
        '::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb="20px">
        <Typography variant="h2" fontSize="26px" lineHeight="38px">
          Tra cứu lịch sử khoá học
        </Typography>
        <IconButton onClick={handleSidebarToggle}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DateSelector />
      <Stack>
        <Stack mt="20px" direction="row" alignItems="center" justifyContent="space-between">
          <Typography component="span" fontSize="22px" fontWeight={700}>
            Juny 15 - 2022
          </Typography>
          <Typography component="span" color={theme.palette.textGrey.main} fontSize="16px">
            15 candidates
          </Typography>
        </Stack>
        <ActivityHistory />
      </Stack>
    </Stack>
  )
}

export default EnrollmentTimeline
