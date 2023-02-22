import { MainLayout } from '@layout/main'
import { Stack } from '@mui/material'
import React from 'react'
import ManageLayout from 'pages/manage'

const Setting = () => {
  return (
    <ManageLayout>
      <Stack>Setting</Stack>
    </ManageLayout>
  )
}

Setting.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Cài đặt | UDA FORUM 2022' },
  }
}

export default Setting
