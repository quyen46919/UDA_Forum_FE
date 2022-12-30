import React from 'react'
import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import Typography from '@mui/material/Typography'
import { Box, useTheme } from '@mui/material'
const Home: NextPageWithLayout = () => {
  const theme = useTheme()
  return (
    <Box height="2000px" pt="20px" sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Typography>This is home page!</Typography>
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
