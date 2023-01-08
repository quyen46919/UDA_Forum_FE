import React from 'react'
import { Stack, useTheme, Skeleton, Avatar } from '@mui/material'

const PostSkeleton = () => {
  const theme = useTheme()

  return (
    <Stack gap="20px">
      <Stack
        padding="20px"
        borderRadius="10px"
        height="100%"
        sx={{
          backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.white.main,
        }}
      >
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Stack width="100%" direction="row" gap="10px">
            <Skeleton width={40} height={40} variant="circular">
              <Avatar />
            </Skeleton>
            <Stack width="100%" gap="10px">
              <Skeleton height={15} width="45%" variant="text" />
              <Skeleton height={15} width="20%" variant="text" />
            </Stack>
          </Stack>
          <Skeleton height={32} width={80} variant="rounded" sx={{ borderRadius: '25px' }} />
        </Stack>

        <Stack direction="column" marginTop="8px">
          <Skeleton variant="text" height={15} sx={{ mb: '4px' }} />
          <Skeleton variant="text" height={15} width="80%" />
        </Stack>

        <Stack
          direction="row"
          sx={{
            '& span.MuiSkeleton-root': {
              height: { xs: '280px', sm: '184px', lg: '184px' },
              width: { xs: '100%', sm: '184px', lg: '184px' },
              borderRadius: '8px',
            },
            '& span.MuiSkeleton-root:not(:first-child)': {
              display: { xs: 'none', sm: 'block', lg: 'block' },
            },
          }}
          margin="15px 0"
          gap="10px"
        >
          <Skeleton variant="rounded" />
          <Skeleton variant="rounded" />
          <Skeleton variant="rounded" />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row', lg: 'row' }}
          alignItems={{ lg: 'center' }}
          sx={{
            '& span.MuiSkeleton-root': {
              width: { xs: '100%', sm: '184px', lg: '184px' },
              height: { xs: '20px', sm: '30px', lg: '30px' },
              borderRadius: '8px',
            },
          }}
          gap="8px"
          justifyContent="space-between"
        >
          <Skeleton variant="rounded" />
          <Skeleton variant="rounded" />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default PostSkeleton
