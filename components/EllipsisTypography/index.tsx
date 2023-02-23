import { SxProps, Tooltip, Typography, TypographyProps, TooltipProps } from '@mui/material'
import React from 'react'
interface EllipsisTypographyProps extends TypographyProps {
  sx?: SxProps
  lineNumber?: number
  children?: React.ReactNode
  tooltipTitle?: React.ReactNode
}

const EllipsisTypography = React.forwardRef((props: EllipsisTypographyProps & TooltipProps, ref: React.Ref<HTMLDivElement>) => {
  const { sx, lineNumber, children, tooltipTitle, placement, ...others } = props

  return (
    <Tooltip
      title={tooltipTitle}
      placement={placement}
      disableHoverListener={!tooltipTitle ? true : false}
    >
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
    </Tooltip>
  )
})

export default EllipsisTypography
