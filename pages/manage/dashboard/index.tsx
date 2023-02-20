import { MainLayout } from '@layout/main'
import { Stack } from '@mui/material'
import React from 'react'
import ManageLayout from 'pages/manage'

const Dashboard = () => {
  return (
    <ManageLayout>
      <Stack fontSize="24px">Dashboard</Stack>
    </ManageLayout>
  )
}

Dashboard.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Dashboard | UDA FORUM 2022' },
  }
}

export default Dashboard
