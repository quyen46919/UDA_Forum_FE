import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Divider,
  Fab,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Backdrop,
} from '@mui/material'
import * as bodyPix from '@tensorflow-models/body-pix'
import * as tf from '@tensorflow/tfjs'
import Link from 'next/link'
import Webcam from 'react-webcam'
import { CameraIcon, CloseIcon } from 'libs/icons'
import Image from 'next/image'
import Thumbnail from '@images/thumbnail.jpg'
import axios, { AxiosProgressEvent } from 'axios'
tf.getBackend()

const Register = () => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })
  const [model, setModel] = useState<Record<keyof any, any>>()
  const ref = useRef<HTMLDivElement>(null)
  const [showWebcam, setShowWebcam] = useState<boolean>(false)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    handleSize()
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  const estimate = async () => {
    setLoading(true)
    try {
      await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title: 'test title',
          completed: true,
        },
        {
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const { loaded, total } = progressEvent
            if (total !== undefined) {
              const percent = Math.round((loaded * 100) / total)
              setProgress(percent)
            }
          },
        }
      )
    } catch (err) {
      return err
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ background: '#e6e8ec' }}
    >
      <Stack
        direction="row-reverse"
        width={{ xs: '100%', sm: '90%', lg: '1000px' }}
        height={{ xs: '100%', sm: '620px', lg: '620px' }}
        sx={{
          background:
            theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.white.main,
          borderRadius: downSm ? 0 : '25px',
        }}
      >
        <Stack
          minWidth={{ xs: '100%', sm: '50%', xl: '50%' }}
          maxWidth={{ xs: '100%', sm: '50%', xl: '50%' }}
          padding={{ xs: '30px', sm: '30px', lg: '50px' }}
          height="100%"
          gap="35px"
          justifyContent="center"
          display={{ xs: showWebcam ? 'none' : 'flex', sm: 'flex', lg: 'flex' }}
        >
          <Stack>
            <Typography variant="h1">Đăng ký</Typography>
            <Typography>Vui lòng nhập đầy đủ thông tin của bạn.</Typography>
            {downSm && (
              <>
                <Button
                  onClick={() => setShowWebcam(true)}
                  variant="contained"
                  sx={{ m: '35px 0' }}
                >
                  Đăng ký nhận diện khuôn mặt
                </Button>
                <Divider sx={{ '&:before, &:after': { top: 0 } }}>or</Divider>
              </>
            )}
          </Stack>
          <Stack gap="10px">
            <TextField
              label="Họ tên đầy đủ"
              type="text"
              variant="standard"
              placeholder="Nhập họ tên của bạn"
              spellCheck="false"
              required
            />
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
              required
            />
            <TextField
              label="Xác thực mật khẩu"
              type="password"
              variant="standard"
              placeholder="Nhập lại mật khẩu của bạn"
              spellCheck="false"
              required
            />
          </Stack>
          <Stack gap="10px">
            <Button variant="contained">Đăng ký</Button>
            <Typography
              textAlign="center"
              sx={{
                '& a': {
                  color: theme.palette.black.dark,
                  fontWeight: 600,
                },
              }}
            >
              Đã có tài khoản?<Link href="/login"> Đăng nhập</Link>
            </Typography>
          </Stack>
        </Stack>
        <Stack
          ref={ref}
          width={{ xs: '100%', sm: '50%', lg: '50%' }}
          height="100%"
          alignItems="center"
          justifyContent="center"
          position="relative"
          sx={{
            '& video, & img': {
              borderTopLeftRadius: downSm ? 0 : '25px',
              borderBottomLeftRadius: downSm ? 0 : '25px',
            },
            '& img': {
              objectFit: 'cover',
              position: 'relative !important',
            },
          }}
        >
          {showWebcam && (
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
              <Stack direction="row" position="absolute" bottom="20px" gap="10px">
                <Fab onClick={() => setShowWebcam(false)}>
                  <CloseIcon />
                </Fab>
                <Fab onClick={estimate}>
                  <CameraIcon />
                </Fab>
              </Stack>
              {
                <Backdrop
                  sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '15px',
                    textAlign: 'center',
                    '& p': {
                      fontSize: '16px',
                    },
                  }}
                  open={loading}
                >
                  <Typography>Chúng tôi đang xử lý hình ảnh của bạn</Typography>
                  <Typography>{`Tiến độ: ${Math.round(progress)}%`}</Typography>
                </Backdrop>
              }
            </>
          )}
          {!showWebcam && (
            <Stack display={{ xs: 'none', sm: 'flex', lg: 'flex' }}>
              <Image src={Thumbnail} alt="thumbnail" layout="fill" priority />
              <Stack
                position="absolute"
                gap="10px"
                alignItems="center"
                bottom={0}
                left={0}
                width="100%"
                padding="35px"
              >
                <Typography
                  color={theme.palette.white.main}
                  lineHeight="35px"
                  fontSize={{ xs: '22px', sm: '22px', lg: '32px' }}
                >
                  We move 10x faster than our peers and stay consistent. While they're bogged down
                  with desgin debt, we're releasing new features.
                </Typography>
                <Fab
                  sx={{ display: 'flex', gap: '10px' }}
                  onClick={() => setShowWebcam(true)}
                  variant="extended"
                >
                  <CameraIcon />
                  Nhận diện khuôn mặt
                </Fab>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Đăng ký | UDA FORUM 2022' },
  }
}

export default Register
