import React, { useEffect, useRef, useState } from 'react'
import { Tooltip, Stack } from '@mui/material'

interface TooltipProps {
  title: string
  children: React.ReactElement
}

const OverflowTooltip = (props: TooltipProps) => {
  const [isOverflowed, setIsOverflow] = useState<Boolean>(false)
  const textElementRef = useRef<HTMLElement | undefined>()

  useEffect(() => {
    if (
      textElementRef.current !== undefined &&
      textElementRef.current.scrollWidth > textElementRef.current.clientWidth
    ) {
      setIsOverflow(true)
    }
  }, [])

  return (
    <Tooltip title={props.title} disableHoverListener={!isOverflowed}>
      <Stack ref={textElementRef}>{props.children}</Stack>
    </Tooltip>
  )
}

export default OverflowTooltip
