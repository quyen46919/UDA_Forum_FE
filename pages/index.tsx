import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import { Typography } from '@mui/material'
import {
  Box
} from '@mui/material'
import React from 'react'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Typography variant="h2">This is home page</Typography>
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
