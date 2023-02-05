import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  CircularProgress,
  Divider,
  Fab,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import * as bodyPix from '@tensorflow-models/body-pix'
import * as tf from '@tensorflow/tfjs'
import Link from 'next/link'
import Webcam from 'react-webcam'
import { CameraIcon, CloseIcon } from 'libs/icons'
tf.getBackend()

type Segmentation = {
  height: number
  width: number
  data: Uint8Array
  allPoses: Array<{}>
}

const Login = () => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })
  const [model, setModel] = useState<Record<keyof any, any>>()
  const [disabled, setDisabled] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const [mobileWebcam, setMobileWebcam] = useState<boolean>(false)

  useEffect(() => {
    bodyPix.load().then((net: object) => {
      setModel(net)
    })
  }, [])

  const handleSize = () => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }
  }

  const handleClose = () => {
    setMobileWebcam(false)
  }

  useEffect(() => {
    handleSize()
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  const estimate = () => {
    setDisabled(true)
    const webcam = document.getElementById('webcam')
    model !== undefined &&
      model.segmentPerson(webcam).then(
        (segmentation: Segmentation) => {
          console.log('## segmentation', segmentation)
          setDisabled(false)
        },
        [model]
      )
  }

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ background: '#e6e8ec' }}
    >
      <Stack
        direction="row"
        width={{ xs: '100%', sm: '90%', lg: '1000px' }}
        height={{ xs: '100%', sm: '620px', lg: '620px' }}
        sx={{
          background:
            theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.white.main,
          borderRadius: downSm ? 0 : '25px',
        }}
      >
        {(!mobileWebcam || !downSm) && (
          <Stack
            minWidth={{ xs: '100%', sm: '50%', xl: '50%' }}
            maxWidth={{ xs: '100%', sm: '50%', xl: '50%' }}
            padding={{ xs: '30px', sm: '30px', lg: '50px' }}
            height="100%"
            gap="35px"
            justifyContent="center"
          >
            <Stack>
              <Typography variant="h1">Đăng nhập</Typography>
              <Typography>Vui lòng nhập đầy đủ thông tin của bạn.</Typography>
              {downSm && (
                <>
                  <Button
                    onClick={() => setMobileWebcam(true)}
                    variant="contained"
                    sx={{ m: '35px 0' }}
                  >
                    Đăng nhập bằng nhận diện khuôn mặt
                  </Button>
                  <Divider sx={{ '&:before, &:after': { top: 0 } }}>or</Divider>
                </>
              )}
            </Stack>
            <Stack>
              <TextField
                label="Email"
                type="email"
                variant="standard"
                placeholder="Nhập email của bạn"
                spellCheck="false"
                required
              />
              <TextField
                label="Mật khẩu"
                type="password"
                variant="standard"
                placeholder="Nhập mật khẩu của bạn"
                spellCheck="false"
                sx={{ mt: '10px' }}
                required
              />
              <Typography
                sx={{
                  '&': {
                    textAlign: 'end',
                    mt: '5px',
                    '& a': {
                      color: theme.palette.black.dark,
                      fontWeight: 600,
                      textDecoration: 'underline',
                    },
                  },
                }}
              >
                <Link href="/login">Quên mật khẩu</Link>
              </Typography>
            </Stack>
            <Stack gap="10px">
              <Button variant="contained">Đăng nhập</Button>
              <Typography
                textAlign="center"
                sx={{
                  '& a': {
                    color: theme.palette.black.dark,
                    fontWeight: 600,
                  },
                }}
              >
                Chưa có tài khoản? <Link href="/register">Đăng ký</Link>
              </Typography>
            </Stack>
          </Stack>
        )}
        {(mobileWebcam || !downSm) && (
          <Stack
            ref={ref}
            width={{ xs: '100%', sm: '50%', lg: '100%' }}
            height="100%"
            alignItems="center"
            justifyContent="center"
            position="relative"
            sx={{
              '& video': {
                borderTopRightRadius: downSm ? 0 : '25px',
                borderBottomRightRadius: downSm ? 0 : '25px',
              },
            }}
          >
            {dimensions.width ? (
              <>
                <Webcam
                  id="webcam"
                  audio={false}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    facingMode: 'user',
                  }}
                  style={{
                    width: downSm ? '100vw' : dimensions.width,
                    height: downSm ? '100vh' : dimensions.height,
                    objectFit: 'cover',
                  }}
                />
                {downSm && (
                  <Stack direction="row" position="absolute" bottom="20px" gap="10px">
                    <Fab onClick={handleClose}>
                      <CloseIcon />
                    </Fab>
                    <Fab onClick={estimate} disabled={disabled}>
                      <CameraIcon />
                    </Fab>
                  </Stack>
                )}
              </>
            ) : (
              <CircularProgress />
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Đăng nhập | UDA FORUM 2022' },
  }
}

export default Login
