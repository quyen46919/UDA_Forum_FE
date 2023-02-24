import DateSelector from '@components/DateSelector'
import EllipsisTypography from '@components/EllipsisTypography'
import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { CloseIcon } from 'libs/icons'
import React from 'react'

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
      <Stack mt="20px" gap="20px">
        {memberList.map((member) => (
          <Card
            key={member.id}
            sx={{
              '&': {
                boxShadow: '1px 10px 29px -22px rgba(255,105,52,0.4)',
                '& .MuiButtonBase-root': { height: '100%' },
              },
            }}
          >
            <CardContent
              sx={{
                '&.MuiCardContent-root': {
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: '6px',
                  '&:last-child': {
                    p: '16px',
                  },
                },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="center">
                <Avatar
                  alt="User Avatar"
                  src="https://via.placeholder.com/60"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              </Stack>
              <Stack alignItems="flex-start">
                <EllipsisTypography variant="body1" fontSize="14px" lineNumber={1}>
                  Họ tên: {member.name}
                </EllipsisTypography>
                <Typography variant="body1" fontSize="14px" textAlign="center">
                  Ngày tham gia: {member.joinDate}
                </Typography>
                <Typography variant="body1" fontSize="14px" textAlign="center">
                  Ngày kết thúc: {member.exitDate ? member.exitDate : 'Chưa có'}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}

export default EnrollmentTimeline
