import { MainLayout } from '@layout/main'
import { Stack } from '@mui/material'
import React from 'react'
import ManageLayout from 'pages/manage'

const Document = () => {
  return (
    <ManageLayout>
      <Stack>Document</Stack>
    </ManageLayout>
  )
}

Document.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Tài liệu | UDA FORUM 2022' },
  }
}

export default Document
