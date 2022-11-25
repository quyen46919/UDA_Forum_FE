import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import {
  Box
} from '@mui/material'
import React from 'react'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <h1>This is home page</h1>
    </Box>
  )
}
Home.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'UDA FORUM 2022' },
  }
}

export default Home
