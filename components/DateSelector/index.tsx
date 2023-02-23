import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import type { } from '@mui/x-date-pickers/themeAugmentation'
import dayjs, { Dayjs } from 'dayjs'

const DateSelector = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disableFuture
        openTo="day"
        views={['year', 'month', 'day']}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              '& .MuiInputBase-root': {
                fontSize: '18px',
                pr: '18px',
                '& .MuiIconButton-root': {
                  p: '6px',
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default DateSelector
