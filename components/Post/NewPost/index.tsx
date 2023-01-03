import { formatDate } from '@components/FormatDate'
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { EmojiIcon } from 'libs/icons'
import React from 'react'

const NewPost = () => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack
      direction="row"
      width="100%"
      padding="20px"
      gap="20px"
      borderRadius="10px"
      justifyContent="space-between"
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.white.main,
      }}
    >
      <Avatar
        sx={{ width: '40px', height: '40px' }}
        src="https://img.freepik.com/free-photo/woman-wearing-glasses-looking-camera_23-2148255265.jpg?w=740&t=st=1672221511~exp=1672222111~hmac=b2d7660091e0fbf38943718431170647e94f588ab9e16f70cad60ef9f8119370"
        alt="avatar"
      />
      <TextField
        placeholder="Bạn đang nghĩ gì thế?"
        variant="outlined"
        spellCheck="false"
        InputProps={{
          endAdornment: (
            <IconButton sx={{ padding: '8px' }}>
              <EmojiIcon />
            </IconButton>
          ),
        }}
        sx={{ minWidth: { lg: '440px' }, flex: 1 }}
      />
      {!downSm && (
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '6px', backgroundColor: '#3582E0', color: theme.palette.white.main }}
        >
          Đăng bài
        </Button>
      )}
    </Stack>
  )
}

export default NewPost
