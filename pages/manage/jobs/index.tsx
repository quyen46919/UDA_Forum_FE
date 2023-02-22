import { MainLayout } from '@layout/main'
import { Stack } from '@mui/material'
import React from 'react'
import ManageLayout from 'pages/manage'

const Jobs = () => {
  return (
    <ManageLayout>
      <Stack>Jobs</Stack>
    </ManageLayout>
  )
}

Jobs.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Công việc | UDA FORUM 2022' },
  }
}

export default Jobs
