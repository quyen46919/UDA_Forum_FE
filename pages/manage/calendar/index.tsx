import { MainLayout } from '@layout/main'
import { Stack } from '@mui/material'
import React from 'react'
import ManageLayout from 'pages/manage'

const Calendar = () => {
  return (
    <ManageLayout>
      <Stack>Calendar</Stack>
    </ManageLayout>
  )
}

Calendar.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Lịch | UDA FORUM 2022' },
  }
}

export default Calendar
