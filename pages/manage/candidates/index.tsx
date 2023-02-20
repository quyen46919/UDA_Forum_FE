import { MainLayout } from '@layout/main'
import { Stack } from '@mui/material'
import React from 'react'
import ManageLayout from 'pages/manage'

const Candidates = () => {
  return (
    <ManageLayout>
      <Stack>Candidates</Stack>
    </ManageLayout>
  )
}

Candidates.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Ứng viên | UDA FORUM 2022' },
  }
}

export default Candidates
