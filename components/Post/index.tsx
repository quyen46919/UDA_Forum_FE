import React from 'react'
import ReadMore from '@components/ReadMore'
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
  Divider,
  useMediaQuery,
} from '@mui/material'
import { ActivationIcon, CommentIcon, LikeIcon, ShareIcon, StarIcon } from 'libs/icons'
import { formatDate } from '@components/FormatDate'
import ImageGallery from '@components/ImageGallery'
interface PostProps {
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
  shared: boolean
  createdAt: string
  images?: string[] | undefined
}
interface DataProps {
  data: PostProps[]
}

const Post = ({ data }: DataProps) => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))

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
          <Stack direction="row" justifyContent="space-between" sx={{ cursor: 'pointer' }}>
            <Stack direction="row" gap="10px">
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
            <Stack direction="row" gap="20px">
              <Button
                variant="outlined"
                sx={{
                  textTransform: 'initial',
                  borderRadius: '25px',
                  color: post.following ? '#000000a6' : '#657ef8',
                  height: '32px',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: '24px',
                  backgroundColor: post.following ? '#f6f9fb' : '#e1e7ff',
                  '&:hover': {
                    background: post.following ? '#8592a3' : '#657ef8',
                    color: theme.palette.white.main,
                  },
                }}
              >
                {post.following ? 'Đang theo dõi' : 'Theo dõi'}
              </Button>
              <IconButton sx={{ height: '30px' }}>
                <StarIcon status={post.savePost ? 0 : 1} />
              </IconButton>
            </Stack>
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
          <Stack width="100%" marginTop="12px">
            <ImageGallery imageList={post?.images} />
          </Stack>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            alignItems={{ lg: 'center' }}
            justifyContent="space-between"
            marginTop="16px"
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
                  color: theme.palette.textLightGrey.main,
                },
              }}
            >
              <Typography flex="1" variant="body1">
                {post.likes} lượt thích
              </Typography>
              <Typography variant="body1">{post.comments} bình luận</Typography>
              <Typography variant="body1">{post.saved} đã lưu</Typography>
            </Stack>
            {downSm ? <Divider sx={{ m: '5px' }} /> : ''}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'space-around', lg: 'normal' }}
              sx={{
                '& > button': {
                  width: { lg: '40px' },
                  height: { xs: '35px', lg: '40px' },
                  gap: { xs: '4px', lg: 0 },
                  p: { xs: '15px' },
                },
              }}
            >
              <IconButton>
                <LikeIcon status={post.liked ? 0 : 1} />
                {downSm ? (
                  <Typography variant="body1">{post.liked ? 'Đã thích' : 'Thích'}</Typography>
                ) : (
                  ''
                )}
              </IconButton>
              <IconButton>
                <CommentIcon />
                {downSm ? <Typography variant="body1">Bình luận</Typography> : ''}
              </IconButton>
              <IconButton>
                <ShareIcon status={post?.shared ? 0 : 1} />
                {downSm ? <Typography variant="body1">Chia sẻ</Typography> : ''}
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

export default Post
