import React from 'react'
import DateSelector from '@components/DateSelector'
import {
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { CloseIcon } from 'libs/icons'
import ActivityHistory from '../ActivityHistory'

type HandleSidebarToggleProps = {
  handleSidebarToggle?: () => void
}

const memberList = [
  {
    id: 0,
    name: 'Phùng Trương Đình Quân Phùng Trương Đình Quân',
    job: 'Quân đẹp trai vô địch khắp vũ trụ Quân đẹp trai vô địch khắp vũ trụ',
    joinDate: 'hôm qua',
    exitDate: null,
  },
  {
    id: 1,
    name: 'Jason Ruly 1',
    job: 'UI/UX Designer',
    joinDate: '2 hôm qua',
    exitDate: 'hôm qua',
  },
  {
    id: 2,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
    joinDate: 'hôm qua',
    exitDate: 'tuần trước',
  },
  {
    id: 3,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
    joinDate: 'hôm qua',
    exitDate: 'tuần trước',
  },
  {
    id: 4,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
    joinDate: 'hôm qua',
    exitDate: 'tuần trước',
  },
  {
    id: 5,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
    joinDate: 'hôm qua',
    exitDate: 'tuần trước',
  },
]

const EnrollmentTimeline = ({ handleSidebarToggle }: HandleSidebarToggleProps) => {
  const theme = useTheme()
  const downLg = useMediaQuery(theme.breakpoints.down('lg'))

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
        {downLg && (
          <IconButton onClick={handleSidebarToggle}>
            <CloseIcon />
          </IconButton>
        )}
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
