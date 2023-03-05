import {
  Stack,
  Pagination as MuiPagination,
  useTheme,
  PaginationProps,
  useMediaQuery,
} from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

const Pagination = (props: PaginationProps) => {
  const [page, setPage] = useState(1)
  const theme = useTheme()
  const downLg = useMediaQuery(theme.breakpoints.down('lg'))

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  return (
    <Stack alignItems={downLg ? 'center' : 'flex-end'} gap="8px">
      <MuiPagination
        {...props}
        sx={{
          '&.MuiPagination-root': {
            '& .MuiPagination-ul': {
              '& .MuiButtonBase-root.Mui-selected': {
                backgroundColor: theme.palette.orange.main,
                color: theme.palette.white.main,
              },
            },
          },
        }}
        shape="rounded"
        size={downLg ? 'medium' : 'large'}
        showFirstButton
        showLastButton
        page={page}
        onChange={handleChange}
        boundaryCount={downLg ? 0 : 1}
      />
    </Stack>
  )
}

export default Pagination
