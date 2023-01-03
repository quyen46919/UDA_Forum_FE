import { MobileStepper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { motion } from 'framer-motion'
import { wrap } from 'popmotion'

const swipeConfidenceThreshold: number = 10000
const swipePower = (offset: any, velocity: any) => {
  return Math.abs(offset) * velocity
}

const variants = {
  enter: (direction: any) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0.8,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: any) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0.8,
    }
  },
}

export default function ImageGallery(props: any) {
  const { imageList } = props

  console.log(imageList);
  
  // const useStyles = makeStyles(() => ({
  //     title: {
  //         color: 'black',
  //         marginRight: 10,
  //         fontWeight: 600,
  //         fontSize: 25
  //     }
  // }));
  const [lightBoxPhotoIndex, setLightBoxPhotoIndex] = useState(0)
  const [isOpenLightBox, setIsOpenLightBox] = useState(false)
  const theme = useTheme()
  const belowSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, imageList.length || 0, page)

  const paginate = (newDirection: any) => {
    setPage([page + newDirection, newDirection])
  }

  var displayLightBoxGallaryImage = (images: any) => {
    if (images) {
      return (
        <Lightbox
          mainSrc={images[lightBoxPhotoIndex]}
          nextSrc={images[(lightBoxPhotoIndex + 1) % images.length]}
          prevSrc={images[(lightBoxPhotoIndex + images.length - 1) % images.length]}
          imageCaption="this is caption of image"
          onMoveNextRequest={() => {
            const nextImageIndex = (lightBoxPhotoIndex + 1) % images.length
            setLightBoxPhotoIndex(nextImageIndex)
            setPage([nextImageIndex, 1])
          }}
          onMovePrevRequest={() => {
            const prevImageIndex = (lightBoxPhotoIndex + images.length - 1) % images.length
            setLightBoxPhotoIndex(prevImageIndex)
            setPage([prevImageIndex, -1])
          }}
          onCloseRequest={() => {
            setIsOpenLightBox(false)
            setLightBoxPhotoIndex(0)
          }}
        />
      )
    }
  }

  const displayImage = (images: any) => {
    if (belowSmScreen) {
      return (
        <Box
          sx={{
            borderRadius: '10px!important',
            overflow: 'hidden!important',
            position: 'relative',
            '& img': {
              width: '100%',
              height: {
                xs: 280,
                md: 300,
              },
              objectFit: 'cover',
              overflow: 'hidden',
              borderRadius: '10px',
            },
            '& p': { m: 0 },
          }}
        >
          <MobileStepper
            nextButton={null}
            backButton={null}
            variant="text"
            steps={imageList?.length}
            position="static"
            activeStep={imageIndex}
            sx={{
              position: 'absolute',
              left: '10px',
              top: '10px',
              width: 'auto',
              zIndex: 999,
              background: 'transparent!important',
              backgroundColor: 'rgba(255, 255, 255, 0.548)!important',
              borderRadius: '10px!important',
            }}
          />
          <motion.img
            key={imageList[imageIndex]}
            src={imageList[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e: any, { offset, velocity }: any) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            onDoubleClick={() => {
              setIsOpenLightBox(true)
              setLightBoxPhotoIndex(imageIndex)
            }}
          />
        </Box>
      )
    }

    if (images) {
      if (images.length === 1) {
        return (
          <Stack
            justifyContent="center"
            sx={{
              backgroundImage: `url(${images[0]}`,
              backgroundSize: 'cover',
              width: '100%',
              height: 300,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            onDoubleClick={() => {
              setIsOpenLightBox(true)
              setLightBoxPhotoIndex(1)
            }}
          />
        )
      } else if (images.length === 2) {
        return (
          <Stack>
            {images.map((image: any, index: any) => {
              return (
                <Stack key={index}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    style={{
                      backgroundImage: `url(${image}`,
                      width: 'auto',
                      height: 400,
                      borderRadius: 5,
                      marginBottom: 5,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                    onDoubleClick={() => {
                      setIsOpenLightBox(true)
                      setLightBoxPhotoIndex(index)
                    }}
                  ></Stack>
                </Stack>
              )
            })}
          </Stack>
        )
      } else if (images.length === 3) {
        return (
          <Stack>
            <Stack>
              <Stack
                direction="row"
                justifyContent="center"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                onDoubleClick={() => {
                  setIsOpenLightBox(true)
                  setLightBoxPhotoIndex(0)
                }}
              />
            </Stack>{' '}
            <Stack>
              {images.map((image: any, index: any) => {
                if (index != 0) {
                  return (
                    <Stack
                      direction="row"
                      justifyContent="center"
                      key={index}
                      style={{
                        backgroundImage: `url(${image}`,
                        width: 'auto',
                        height: 195,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                      onDoubleClick={() => {
                        setIsOpenLightBox(true)
                        setLightBoxPhotoIndex(index)
                      }}
                    ></Stack>
                  )
                }
              })}
            </Stack>
          </Stack>
        )
      } else if (images.length === 4) {
        return (
          <Stack>
            <Stack>
              <Stack
                direction="row"
                justifyContent="center"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                onDoubleClick={() => {
                  setIsOpenLightBox(true)
                  setLightBoxPhotoIndex(0)
                }}
              ></Stack>
            </Stack>
            <Stack>
              {images.map((image: any, index: any) => {
                if (index != 0) {
                  return (
                    <Stack
                      direction="row"
                      justifyContent="center"
                      key={index}
                      style={{
                        backgroundImage: `url(${image}`,
                        width: 'auto',
                        height: 130,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                      onDoubleClick={() => {
                        setIsOpenLightBox(true)
                        setLightBoxPhotoIndex(index)
                      }}
                    ></Stack>
                  )
                }
              })}
            </Stack>
          </Stack>
        )
      } else {
        // If length of images list >= 5, we will show only 5 pictures and hide others.
        return (
          <Stack>
            <Stack>
              <Stack
                direction="row"
                justifyContent="center"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                onDoubleClick={() => {
                  setIsOpenLightBox(true)
                  setLightBoxPhotoIndex(0)
                }}
              />
            </Stack>
            <Stack>
              <Stack>
                {images.map((image: any, index: any) => {
                  if (index != 0) {
                    if (index > 3 && images.length > 5) {
                      if (index === 4) {
                        return (
                          <Stack key={index}>
                            <Stack
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: 'auto',
                                height: 195,
                                borderRadius: 5,
                                overflow: 'hidden',
                                cursor: 'pointer',
                              }}
                              onClick={() => {
                                setLightBoxPhotoIndex(0)
                                setIsOpenLightBox(true)
                              }}
                            >
                              <Box
                                sx={{
                                  width: '100%',
                                  height: '100%',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  backgroundColor: 'rgba(133, 133, 133, 0.5)',
                                }}
                              >
                                <Typography
                                  style={{
                                    color: 'white',
                                    fontSize: 32,
                                    fontWeight: 600,
                                  }}
                                >
                                  +{images.length - index}
                                </Typography>
                              </Box>
                            </Stack>
                          </Stack>
                        )
                      }
                    } else {
                      if (images.length <= 5) {
                        if (index > 2) {
                          return (
                            <Stack key={index}>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                style={{
                                  backgroundImage: `url(${image}`,
                                  width: 'auto',
                                  height: 105,
                                  borderRadius: 5,
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: 'center',
                                }}
                                onDoubleClick={() => {
                                  setIsOpenLightBox(true)
                                  setLightBoxPhotoIndex(index)
                                }}
                              ></Stack>
                            </Stack>
                          )
                        }
                        return (
                          <Stack key={index}>
                            <Stack
                              direction="row"
                              justifyContent="center"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: 'auto',
                                height: 155,
                                borderRadius: 5,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                              }}
                              onDoubleClick={() => {
                                setIsOpenLightBox(true)
                                setLightBoxPhotoIndex(index)
                              }}
                            ></Stack>
                          </Stack>
                        )
                      } else {
                        return (
                          <Stack key={index}>
                            <Stack
                              direction="row"
                              justifyContent="center"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: 'auto',
                                height: 195,
                                borderRadius: 5,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                              }}
                              onDoubleClick={() => {
                                setIsOpenLightBox(true)
                                setLightBoxPhotoIndex(index)
                              }}
                            ></Stack>
                          </Stack>
                        )
                      }
                    }
                  }
                })}
              </Stack>
            </Stack>
          </Stack>
        )
      }
    }
  }
  return (
    <div>
      <div>{displayImage(imageList)}</div>
      {isOpenLightBox && <div>{displayLightBoxGallaryImage(imageList)}</div>}
    </div>
  )
}
