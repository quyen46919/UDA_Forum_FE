import React, { useState } from 'react'
import { Typography, TypographyProps, Stack } from '@mui/material'

const ReadMore = (props: { children: string } & TypographyProps) => {
  const [isReadMore, setIsReadMore] = useState<Boolean>(true)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  const handleReadMore = (content: string) => {
    if (content.length >= 400) {
      if (isReadMore) return 'Xem thêm'
      if (isReadMore === false) return ' Thu gọn'
    }
    return ''
  }

  return (
    <>
      <Typography
        {...props}
        textOverflow="ellipsis"
        flexWrap="nowrap"
        overflow="hidden"
        sx={{
          WebkitBoxOrient: 'vertical',
          display: '-webkit-box',
          WebkitLineClamp: isReadMore ? '2' : 'none',
        }}
      >
        {props.children}
      </Typography>
      <Stack
        component="span"
        onClick={toggleReadMore}
        sx={{
          cursor: 'pointer',
          userSelect: 'none',
          display: 'inline',
          fontWeight: 600,
          fontSize: '14px',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {handleReadMore(props.children)}
      </Stack>
    </>
  )
}

export default ReadMore
