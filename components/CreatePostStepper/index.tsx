import React from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'

const steps = [
  {
    id: 1,
    count: 1,
    title: 'Trạng thái',
    status: 1,
  },
  {
    id: 2,
    count: 2,
    title: 'Tiêu đề',
    status: 0,
  },
  {
    id: 3,
    count: 3,
    title: 'Nội dung',
    status: 0,
  },
  {
    id: 4,
    count: 4,
    title: 'Loại câu hỏi',
    status: 1,
  },
]

function CreatePostStepper() {
  const theme = useTheme()
  return (
    <Stack width="100%" mt="40px" gap="20px">
      {steps.map((step) => (
        <Stack direction="row" alignItems="center" gap="20px" key={step.id}>
          <Box
            width="40px"
            height="40px"
            sx={{
              backgroundColor: step.status === 0 ? '#ff693417' : theme.palette.orange.main,
              color: step.status === 0 ? theme.palette.orange.main : '#ffffff',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="5px"
          >
            <Typography variant="h3">{step.status === 1 ? 'V' : step.count}</Typography>
          </Box>
          <Typography variant="body1" fontWeight={600}>
            {step.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default CreatePostStepper
