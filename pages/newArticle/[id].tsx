import React from 'react'
import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import { Stack, useTheme } from '@mui/material'
import { GetStaticPaths } from 'next'
import Post from '@components/Post'

const NewArticle: NextPageWithLayout = () => {
  const theme = useTheme()

  return (
    <Stack
      sx={{ backgroundColor: theme.palette.secondary.main }}
      direction="row"
      minHeight="calc(100vh - 70px)"
      p={{ xs: '20px', lg: '20px 40px 20px 40px' }}
      maxWidth={{ lg: '1536px', xl: '1920px' }}
      justifyContent="center"
    >
      <Post />
    </Stack>
  )
}

NewArticle.Layout = MainLayout

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps() {
  return {
    props: { title: 'Đăng bài viết | UDA FORUM 2022' },
  }
}

export default NewArticle
