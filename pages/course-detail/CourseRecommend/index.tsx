import React from 'react'
import EllipsisTypography from '@components/EllipsisTypography'
import { IconButton, Stack, Typography, useTheme } from '@mui/material'
import { FavoriteOutlineIcon, FiberManualRecordIcon, GroupIcon, StarFillIcon } from 'libs/icons'
import Image from 'next/image'
import NavLink from '@components/NavLink'

interface CourseRecommendProps {
  image: string | any
  name: string
  totalHours: number
  star: number
  studentCount: number
  salePrice: number
  updatedAt: string
}

export default function CourseRecommend(props: CourseRecommendProps) {
  const { image, name, totalHours, star, studentCount, salePrice, updatedAt } = props
  const theme = useTheme()
  return (
    <NavLink href="#!">
      <Stack p="16px 0" direction="row" alignItems="flex-start">
        <Stack direction="row">
          <Image src={image} width="80px" height="80px" alt={name} objectFit="cover" />
          <Stack ml="8px" maxWidth="280px">
            <EllipsisTypography lineNumber={2} fontWeight={700} fontSize="16px">
              {name}
            </EllipsisTypography>
            <Stack direction="row" mt="8px" alignItems="center">
              <Stack
                direction="row"
                sx={{ '& svg': { width: '6px', lineHeight: '22px', m: '0 4px' } }}
              >
                <Typography component="span" fontWeight={700} color={theme.palette.orange.main}>
                  {totalHours} hours
                </Typography>
                <FiberManualRecordIcon />
              </Stack>
              <Typography component="span">Updated {updatedAt}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          ml="24px"
          direction="row"
          flex="1"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="flex-start">
            <Stack direction="row" alignItems="flex-start" justifyContent="center">
              <Typography color="#b4690e" fontWeight={700} mr="4px" fontSize="14px">
                {star}
              </Typography>
              <StarFillIcon />
            </Stack>
            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="center"
              m="0 32px 0 24px"
            >
              <GroupIcon />
              <Typography component="span" ml="4px">
                {studentCount}
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography component="span" fontWeight={700}>
                {salePrice}
              </Typography>
            </Stack>
          </Stack>
          <IconButton color="darkGrey">
            <FavoriteOutlineIcon />
          </IconButton>
        </Stack>
      </Stack>
    </NavLink>
  )
}
