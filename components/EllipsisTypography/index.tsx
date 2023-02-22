import React from 'react'
import { Typography, SxProps, TypographyProps } from '@mui/material'

interface EllipsisTypographyProps extends TypographyProps {
  sx?: SxProps
  lineNumber?: number
  children?: React.ReactNode
}

const EllipsisTypography = React.forwardRef(
  (props: EllipsisTypographyProps, ref: React.Ref<HTMLDivElement>) => {
    const { sx, lineNumber, children, ...others } = props

    return (
      <Typography
        {...others}
        ref={ref}
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: lineNumber ?? 2,
          whiteSpace: 'normal',
          ...sx,
        }}
      >
        {children}
      </Typography>
    )
  }
)

export default EllipsisTypography
