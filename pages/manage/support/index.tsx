import { MainLayout } from '@layout/main'
import { Stack } from '@mui/material'
import React from 'react'
import ManageLayout from 'pages/manage'

const Support = () => {
  return (
    <ManageLayout>
      <Stack>Support</Stack>
    </ManageLayout>
  )
}

Support.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Hỗ trợ | UDA FORUM 2022' },
  }
}

export default Support
