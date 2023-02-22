import React from 'react'
import { MainLayout } from '@layout/main'
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
  Box,
  useMediaQuery,
} from '@mui/material'
import ManageLayout from 'pages/manage'
import { SearchIcon } from 'libs/icons'
import Link from 'next/link'
import EllipsisTypography from '@components/EllipsisTypography'

const candidatesData = [
  {
    id: 0,
    name: 'Phùng Trương Đình Quân Phùng Trương Đình Quân',
    job: 'Quân đẹp trai vô địch khắp vũ trụ Quân đẹp trai vô địch khắp vũ trụ',
  },
  {
    id: 1,
    name: 'Jason Ruly 1',
    job: 'UI/UX Designer',
  },
  {
    id: 2,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
  },
  {
    id: 3,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
  },
  {
    id: 4,
    name: 'Jason Ruly 4',
    job: 'UI/UX ASDAD',
  },
  {
    id: 5,
    name: 'Jason Ruly 5',
    job: 'UI/UX Designer',
  },
  {
    id: 6,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
  },
  {
    id: 7,
    name: 'Phùng Trương Đình Quân Phùng Trương Đình Quân',
    job: 'Quân đẹp trai vô địch khắp vũ trụ Quân đẹp trai vô địch khắp vũ trụ',
  },
  {
    id: 8,
    name: 'Jason Ruly 1',
    job: 'UI/UX Designer',
  },
  {
    id: 9,
    name: 'Jason Ruly 2',
    job: 'UI/UX Designer',
  },
  {
    id: 10,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
  },
  {
    id: 11,
    name: 'Jason Ruly 4',
    job: 'UI/UX ASDAD',
  },
  {
    id: 12,
    name: 'Jason Ruly 5',
    job: 'UI/UX Designer',
  },
  {
    id: 13,
    name: 'Jason Ruly 3',
    job: 'UI/UX Designer',
  },
]

const Candidates = () => {
  const theme = useTheme()
  const upLg = useMediaQuery(theme.breakpoints.up('lg'))
  const upSm = useMediaQuery(theme.breakpoints.up('sm'))
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
                      <IconButton sx={{ p: '6px' }}>
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
            gridTemplateColumns="repeat(auto-fill, minmax(160px, 1fr))"
          >
            {candidatesData.map((candidate) => (
              <Link href="/manage/candidates" key={candidate.id}>
                <a>
                  <Card
                    sx={{
                      '&': {
                        boxShadow: '1px 10px 29px -22px rgba(255,105,52,0.4)',
                        '& .MuiButtonBase-root': { height: '100%' },

                        '&:hover': {
                          backgroundColor: 'rgba(255, 105, 51, 0.2)',
                          cursor: 'pointer',
                          transition: '.2s',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ '.MuiCardContent-root': { p: '20px' } }}>
                      <Stack
                        alignItems="center"
                        mb="20px"
                        sx={{
                          '& .MuiAvatar-root img': {
                            borderRadius: '50%',
                            background: theme.palette.orange.main,
                            padding: '10px',
                          },
                        }}
                      >
                        <Avatar
                          alt="User Avatar"
                          src="https://via.placeholder.com/100"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      </Stack>
                      <Stack alignItems="center" height="110px" maxHeight="110px">
                        <EllipsisTypography
                          variant="body2"
                          fontSize="20px"
                          fontWeight={600}
                          textAlign="center"
                        >
                          {candidate.name}
                        </EllipsisTypography>
                        <EllipsisTypography
                          variant="body2"
                          color="#707683"
                          fontWeight={400}
                          textAlign="center"
                        >
                          {candidate.job}
                        </EllipsisTypography>
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', p: '20px', pt: 0 }}>
                      <Button variant="contained" sx={{ width: '200px' }}>
                        Nhắn tin
                      </Button>
                    </CardActions>
                  </Card>
                </a>
              </Link>
            ))}
          </Box>
        </Stack>
        {upLg && <Stack width="400px" maxWidth="400px"></Stack>}
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
