import React from 'react'
import ImageGallery from '@components/ImageGallery'
import ReadMore from '@components/ReadMore'
import Skeleton from '@components/Skeleton'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import {
  ActivationIcon,
  CommentIcon,
  FavoriteFillIcon,
  FavoriteOutlineIcon,
  LikeFillIcon,
  LikeOutlineIcon,
} from 'libs/icons'
import { formatDate } from 'libs/utils'

interface QuestionProps {
  avatar?: string
  name: string
  activation: number
  following: boolean
  savePost: boolean
  title: string
  content: string
  likes: number
  comments: number
  saved: number
  liked: boolean
  loved: boolean
  createdAt: string
  images?: string[] | undefined
}
interface DataProps {
  data: QuestionProps[]
}

const Question = ({ data }: DataProps) => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  const downLg = useMediaQuery(theme.breakpoints.down('lg'))

  if (!data) return <Skeleton />
  return (
    <Stack gap="20px">
      {data?.map((post, index) => (
        <Stack
          key={index}
          padding="20px"
          borderRadius="10px"
          sx={{
            backgroundColor:
              theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.white.main,
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" gap="10px" sx={{ cursor: 'pointer' }}>
              <Avatar
                sx={{ width: '40px', height: '40px' }}
                src="https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370"
                alt="avatar"
              />
              <Stack>
                <Typography
                  display="flex"
                  alignItems="center"
                  variant="body1"
                  fontSize="14px"
                  lineHeight="22px"
                  fontWeight={700}
                  gap="4px"
                >
                  {post.name}
                  <ActivationIcon status={post.activation} />
                </Typography>
                <Tooltip title={`Đã đăng lúc ${formatDate(post.createdAt)}`}>
                  <Typography variant="body2" fontSize="10px" lineHeight="16px" fontWeight={400}>
                    {formatDate(post.createdAt)}
                  </Typography>
                </Tooltip>
              </Stack>
            </Stack>
            <Button
              variant="outlined"
              color={post.following ? 'primary' : 'secondary'}
              sx={{
                borderRadius: '25px',
                height: '32px',
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '24px',
              }}
            >
              {post.following ? 'Đang theo dõi' : 'Theo dõi'}
            </Button>
          </Stack>
          <Stack direction="row" marginTop="8px">
            <Typography
              variant="h1"
              fontSize="16px"
              fontWeight="bold"
              lineHeight="24px"
              fontFamily={`Corbel, "Tahoma Regular", "Tahoma Bold", sans-serif`}
            >
              {post.title}
              <ReadMore
                fontFamily={`Corbel, "Tahoma Regular", "Tahoma Bold", sans-serif`}
                variant="body1"
              >
                {post.content}
              </ReadMore>
            </Typography>
          </Stack>
          <Stack width="100%" margin="15px 0">
            <ImageGallery imageList={post?.images} />
          </Stack>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            alignItems={{ lg: 'center' }}
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              gap="10px"
              alignItems="center"
              sx={{
                cursor: 'pointer',
                '& > p': {
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  color: grey[600],
                },
              }}
            >
              <Typography flex="1" variant="body1">
                {post.likes} lượt thích
              </Typography>
              <Typography variant="body1">{post.comments} bình luận</Typography>
              <Typography variant="body1">{post.saved} đã lưu</Typography>
            </Stack>
            {downSm && <Divider sx={{ m: '5px' }} />}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'space-around', lg: 'normal' }}
              gap={{ lg: '5px' }}
              sx={{
                '& > button': {
                  width: { lg: '30px' },
                  height: { xs: '35px', lg: '30px' },
                  gap: { xs: '4px' },
                  p: { xs: '15px', lg: 0 },

                  '& svg': {
                    width: '16px',
                    height: '16px',
                  },
                  '&:hover svg path': { fill: theme.palette.white.main },
                },
              }}
            >
              <IconButton>
                {post.liked ? <LikeFillIcon /> : <LikeOutlineIcon />}
                {downLg && (
                  <Typography variant="body1">{post.liked ? 'Đã thích' : 'Thích'}</Typography>
                )}
              </IconButton>
              <IconButton>
                <CommentIcon />
                {downLg && <Typography variant="body1">Bình luận</Typography>}
              </IconButton>
              <IconButton>
                {post.loved ? <FavoriteFillIcon /> : <FavoriteOutlineIcon />}
                {downLg && <Typography variant="body1">Chia sẻ</Typography>}
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

export default Question
