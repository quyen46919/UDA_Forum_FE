import { IconButton, TextField, Stack, useTheme } from '@mui/material'
import { range } from 'lodash'
import { getMonth, getYear } from 'date-fns'
import React, { forwardRef, useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ArrowBackIOSIcon, ArrowForwardIOSIcon, CalendarIcon } from 'libs/icons'
import { vi } from 'date-fns/locale'
registerLocale('vi', vi)

type Target = {
  target: {
    value: string
  }
}

interface CustomInputProps {
  value?: string
  onClick?: () => void
}

interface HeaderProps {
  date?: Date | any
  changeYear?: any
  changeMonth?: any
  decreaseMonth?: any
  increaseMonth?: any
  prevMonthButtonDisabled?: boolean
  nextMonthButtonDisabled?: boolean
}

const DateSelector = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const theme = useTheme()
  const years = range(1990, getYear(new Date()) + 1, 1)

  const months = [
    'Tháng một',
    'Tháng hai',
    'Tháng ba',
    'Tháng bốn',
    'Tháng năm',
    'Tháng sáu',
    'Tháng bảy',
    'Tháng tám',
    'Tháng chín',
    'Tháng mười',
    'Tháng mười một',
    'Tháng mười hai',
  ]
  const CustomInput = forwardRef(({ value, onClick, ...others }: CustomInputProps, ref: any) => {
    return (
      <TextField
        {...others}
        onClick={onClick}
        ref={ref}
        value={value}
        sx={{
          width: '100%',
          '& .MuiInputBase-root': {
            fontSize: '18px',
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton>
              <CalendarIcon />
            </IconButton>
          ),
        }}
      />
    )
  })

  const MyContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <Stack
        sx={{
          '& .react-datepicker__month-container': {
            background: theme.palette.white.main,
            '& .react-datepicker__header': {
              background: theme.palette.primary.main,
              '& > div:first-of-type': {
                gap: '15px',
                justifyContent: 'space-around !important',
              },
              '& .react-datepicker__day-names': {
                '& .react-datepicker__day-name': {
                  width: '40px',
                  height: '30px',
                },
              },
            },
            '& .react-datepicker__month': {
              background: theme.palette.white.main,
              '& .react-datepicker__day': {
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#FF8A65',
                  boxShadow: '1px 3px 17px -2px rgba(255,105,52,0.4)',
                  color: theme.palette.white.main,
                },
              },
              '& .react-datepicker__day--selected': {
                backgroundColor: theme.palette.orange.main,
                color: theme.palette.white.main,
              },
            },
          },
        }}
      >
        <Stack style={{ position: 'relative' }}>{children}</Stack>
      </Stack>
    )
  }

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }: HeaderProps) => {
        return (
          <Stack direction="row" m="10px" maxHeight="36px">
            <IconButton
              sx={{ p: '6px' }}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <ArrowBackIOSIcon />
            </IconButton>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }: Target) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }: Target) => {
                return changeMonth(months.indexOf(value))
              }}
            >
              {months.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              })}
            </select>

            <IconButton
              sx={{ p: '6px' }}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <ArrowForwardIOSIcon />
            </IconButton>
          </Stack>
        )
      }}
      locale={'vi'}
      startDate={startDate}
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      customInput={<CustomInput />}
      calendarContainer={MyContainer}
    />
  )
}

export default DateSelector
