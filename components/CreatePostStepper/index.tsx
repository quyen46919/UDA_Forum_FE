import React from 'react'
import { Stack, Typography, useTheme } from '@mui/material'
import { CheckIcon } from 'libs/icons'

const steps = [
  {
    id: 1,
    count: 1,
    title: 'Trạng thái',
    status: 0,
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
    <Stack
      width="100%"
      mt="20px"
      gap="20px"
      direction={{ xs: 'row', sm: 'row', lg: 'column' }}
      justifyContent={{ xs: 'space-around', lg: 'unset' }}
    >
      {steps.map((step) => (
        <Stack
          direction={{ xs: 'column', sm: 'row', lg: 'row' }}
          alignItems="center"
          gap="20px"
          key={step.id}
        >
          <Stack
            width="40px"
            height="40px"
            sx={{
              backgroundColor: step.status === 0 ? '#ff693417' : theme.palette.orange.main,
              color: step.status === 0 ? theme.palette.orange.main : '#ffffff',
            }}
            justifyContent="center"
            alignItems="center"
            borderRadius="5px"
          >
            {step.status === 1 ? (
              <Typography variant="h3">{step.count}</Typography>
            ) : (
              <CheckIcon fill="white" />
            )}
          </Stack>
          <Typography variant="body1" fontWeight={600}>
            {step.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default CreatePostStepper
