import React from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  useTheme,
  CardHeader,
  IconButton,
  Rating,
} from '@mui/material'
import EllipsisTypography from '@components/EllipsisTypography'
import { LikeOutlineIcon, SettingIcon, ThumbDownOutlineIcon } from 'libs/icons'
import ReadMore from '@components/ReadMore'

export default function CourseReviews() {
  const theme = useTheme()

  return (
    <Card
      sx={{
        p: '24px 16px 32px 16px',
        boxShadow: 'none',
        borderTop: '1px solid #d1d7dc',
        borderRadius: 0,
      }}
    >
      <CardHeader
        sx={{ p: 0 }}
        avatar={<Avatar aria-label="reviews">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <SettingIcon />
          </IconButton>
        }
        title={
          <EllipsisTypography lineNumber={1} variant="body1" fontWeight={700} fontSize="16px">
            Quân Phùng
          </EllipsisTypography>
        }
        subheader={
          <Stack direction="row" mt="4px" flexWrap="wrap" alignItems="center" gap="4px">
            <Rating
              defaultValue={4}
              readOnly
              sx={{ fontSize: '16px', color: theme.palette.yellow.main }}
            />
            <Typography component="span">2 day ago</Typography>
          </Stack>
        }
      ></CardHeader>
      <CardContent sx={{ p: 0, mt: '16px' }}>
        <ReadMore>Hello everyone</ReadMore>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-start', p: 0, mt: '16px', alignItem: 'center' }}>
        <Typography component="span" mr="4px" color={theme.palette.darkGrey.main} fontSize="12px">
          Hữu ích?
        </Typography>
        <IconButton>
          <LikeOutlineIcon />
        </IconButton>
        <IconButton>
          <ThumbDownOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
