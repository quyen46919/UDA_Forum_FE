import { MainLayout } from '@layout/main'
import React from 'react'
import ManageLayout from 'pages/manage'
import GroupNoteBoardPage from './GroupNoteBoardPage'
const Jobs = () => {
  return (
    <ManageLayout>
      <GroupNoteBoardPage />
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
