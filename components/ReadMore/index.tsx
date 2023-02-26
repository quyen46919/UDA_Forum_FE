import EllipsisTypography from '@components/EllipsisTypography'
import { Stack, TypographyProps } from '@mui/material'
import React, { useState } from 'react'

interface ReadMoreProps {
  children: string
}

const ReadMore = (props: ReadMoreProps) => {
  const { children, ...others } = props
  const [isReadMore, setIsReadMore] = useState<Boolean>(true)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  const handleReadMore = (content: string) => {
    if (content.length >= 400) {
      if (isReadMore) return 'Xem thêm'
      if (!isReadMore) return ' Thu gọn'
    }
    return ''
  }

  return (
    <>
      <EllipsisTypography
        {...others}
        fontFamily={`Corbel, "Tahoma Regular", "Tahoma Bold", sans-serif`}
        variant="body1"
        lineNumber={isReadMore ? 2 : 0}
      >
        {children}
      </EllipsisTypography>
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
        {handleReadMore(children)}
      </Stack>
    </>
  )
}

export default ReadMore
