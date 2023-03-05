import React from 'react'
import { Card } from '@components/Card'
import { MainLayout } from '@layout/main'
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { SearchIcon } from 'libs/icons'
import ManageLayout from 'pages/manage'
import Pagination from '@components/Pagination'

const candidatesData = [
  {
    id: 0,
    name: 'Phùng Trương Đình Quân Phùng Trương Đình Quân',
    job: 'Quân đẹp trai vô địch khắp vũ trụ Quân đẹp trai vô địch khắp vũ trụ',
    status: 0,
  },
  {
    id: 1,
    name: 'Jason Ruly 1',
    job: 'UI/UX Designer',
    status: 2,
  },
  {
    id: 2,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
    status: 1,
  },
  {
    id: 3,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
    status: 3,
  },
  {
    id: 4,
    name: 'Jason Ruly 4',
    job: 'UI/UX ASDAD',
    status: 0,
  },
  {
    id: 5,
    name: 'Jason Ruly 5',
    job: 'UI/UX Designer',
    status: 1,
  },
  {
    id: 6,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
    status: 0,
  },
  {
    id: 7,
    name: 'Phùng Trương Đình Quân Phùng Trương Đình Quân',
    job: 'Quân đẹp trai vô địch khắp vũ trụ Quân đẹp trai vô địch khắp vũ trụ',
    status: 2,
  },
  {
    id: 8,
    name: 'Jason Ruly 1',
    job: 'UI/UX Designer',
    status: 3,
  },
  {
    id: 9,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
    status: 2,
  },
  {
    id: 10,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
    status: 3,
  },
  {
    id: 11,
    name: 'Jason Ruly 4',
    job: 'UI/UX ASDAD',
    status: 0,
  },
  {
    id: 12,
    name: 'Jason Ruly 5',
    job: 'UI/UX Designer',
    status: 0,
  },
  {
    id: 13,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
    status: 2,
  },
  {
    id: 14,
    name: 'Jason Ruly 5',
    job: 'UI/UX Designer',
    status: 1,
  },
]

const Candidates = () => {
  const theme = useTheme()
  const upSm = useMediaQuery(theme.breakpoints.up('sm'))
  const downLg = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <ManageLayout>
      <Stack direction="row" width="100%" gap="20px">
        <Stack flex="1">
          <Stack
            direction={upSm ? 'row' : 'column'}
            justifyContent="space-between"
            alignItems={upSm ? 'center' : 'flex-start'}
            gap={upSm ? 0 : '10px'}
            mb="22px"
          >
            <Stack>
              <Typography variant="h2" fontSize="22px">
                Tổng quan
              </Typography>
              <Typography variant="body1" color={theme.palette.textGrey.main}>
                Một vài ứng cử viên ứng tuyển
              </Typography>
            </Stack>
            <Stack width={!upSm ? '100%' : 'unset'}>
              <TextField
                placeholder="Tìm kiếm ứng cử viên"
                spellCheck={false}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Stack>
          <Box
            display="grid"
            gap="20px"
            gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
          >
            {candidatesData.map((candidate) => (
              <Card
                key={candidate.id}
                options={{
                  href: '#',
                  alt: 'avatar',
                  title: candidate.name,
                  desc: candidate.job,
                  status: candidate.status,
                }}
              />
            ))}
          </Box>
          <Stack mt="25px">
            <Pagination count={downLg ? 100 : 10} />
          </Stack>
        </Stack>
      </Stack>
    </ManageLayout>
  )
}

Candidates.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Ứng viên | UDA FORUM 2022' },
  }
}

export default Candidates
