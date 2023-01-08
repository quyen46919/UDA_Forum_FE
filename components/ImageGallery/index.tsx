import React, { useEffect, useState } from 'react'
import { MobileStepper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { motion } from 'framer-motion'
import { wrap } from 'popmotion'

const swipeConfidenceThreshold: number = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const variants = {
  enter: (direction: number) => {
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
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0.8,
    }
  },
}
interface ImageGalleryProps {
  imageList: string[] | undefined
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { imageList } = props
  const [lightBoxPhotoIndex, setLightBoxPhotoIndex] = useState(0)
  const [isOpenLightBox, setIsOpenLightBox] = useState(false)
  const theme = useTheme()
  const belowSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const belowLgScreen = useMediaQuery(theme.breakpoints.down('lg'))
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, imageList?.length || 0, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const displayLightBoxGalleryImage = (images: string[]) => {
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
          onImageLoad={() => {
            window.dispatchEvent(new Event('resize'))
          }}
        />
      )
    }
  }

  const displayImage = (images: string[]) => {
    if (belowSmScreen) {
      return (
        <Stack
          sx={{
            borderRadius: '10px',
            overflow: 'hidden!important',
            position: 'relative',
            '& img': {
              height: {
                xs: 280,
                md: 184,
                lg: 184,
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
            steps={imageList?.length ? imageList.length : 0}
            position="static"
            activeStep={imageIndex}
            sx={{
              position: 'absolute',
              left: '10px',
              top: '10px',
              width: 'auto',
              zIndex: 999,
              background: 'transparent',
              backgroundColor: 'rgba(255, 255, 255, 0.548)',
              borderRadius: '10px',
            }}
          />
          <motion.img
            key={imageList ? imageList[imageIndex] : undefined}
            src={imageList ? imageList[imageIndex] : undefined}
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
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            onClick={() => {
              setIsOpenLightBox(true)
              setLightBoxPhotoIndex(imageIndex)
            }}
          />
        </Stack>
      )
    }

    if (images) {
      if (images.length === 1) {
        return (
          <Stack
            justifyContent="center"
            sx={{
              backgroundImage: `url(${images[0]})`,
              backgroundSize: 'cover',
              width: { sm: '184px', lg: '184px' },
              height: { sm: '184px', lg: '184px' },
              borderRadius: '8px',
              cursor: 'pointer',
              mb: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            onClick={() => {
              setIsOpenLightBox(true)
              setLightBoxPhotoIndex(0)
            }}
          />
        )
      } else if (images.length === 2) {
        return (
          <Stack direction="row" gap="10px">
            {images.map((image, index) => {
              return (
                <Stack
                  key={index}
                  direction="row"
                  justifyContent="center"
                  sx={{
                    backgroundImage: `url(${image})`,
                    width: { sm: '184px', lg: '184px' },
                    height: { sm: '184px', lg: '184px' },
                    borderRadius: '8px',
                    mb: 0,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setIsOpenLightBox(true)
                    setLightBoxPhotoIndex(index)
                  }}
                />
              )
            })}
          </Stack>
        )
      } else if (images.length === 3 || images.length === 4) {
        return (
          <Stack direction="row" gap="10px">
            {images.map((image, index) => {
              //Image length = 4 and tablet size => show only 3 pics
              if (belowLgScreen && !belowSmScreen && images.length === 4) {
                if (index > 1 && images.length > 1) {
                  if (index === 2) {
                    return (
                      <Stack key={index}>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            backgroundImage: `url(${image})`,
                            width: { sm: '184px', lg: '184px' },
                            height: { sm: '184px', lg: '184px' },
                            borderRadius: '8px',
                            mb: 0,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                          onClick={() => {
                            setLightBoxPhotoIndex(2)
                            setIsOpenLightBox(true)
                          }}
                        >
                          <Stack
                            width="100%"
                            height="100%"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ backgroundColor: 'rgba(133, 133, 133, 0.5)' }}
                          >
                            <Typography
                              style={{
                                color: theme.palette.white.main,
                                fontSize: '32px',
                                fontWeight: 600,
                              }}
                            >
                              +{images.length - index}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    )
                  }
                }
                if (index <= 1) {
                  return (
                    <Stack direction="row" key={index}>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        sx={{
                          backgroundImage: `url(${image})`,
                          width: { sm: '184px', lg: '184px' },
                          height: { sm: '184px', lg: '184px' },
                          borderRadius: '8px',
                          mb: 0,
                          cursor: 'pointer',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                        }}
                        onClick={() => {
                          setIsOpenLightBox(true)
                          setLightBoxPhotoIndex(index)
                        }}
                      />
                    </Stack>
                  )
                }
              }
              if (images.length === 3 || images.length === 4 && !belowLgScreen && !belowSmScreen) {
                return (
                  <Stack
                    direction="row"
                    justifyContent="center"
                    key={index}
                    sx={{
                      backgroundImage: `url(${image})`,
                      width: { sm: '184px', lg: '184px' },
                      height: { sm: '184px', lg: '184px' },
                      borderRadius: '8px',
                      mb: 0,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setIsOpenLightBox(true)
                      setLightBoxPhotoIndex(index)
                    }}
                  />
                )
              }
            })}
          </Stack>
        )
      } else {
        // Image length >=5 => show 4 pics and hide others.
        return (
          <Stack direction="row" gap="10px">
            {images.map((image, index) => {
              if (belowLgScreen && !belowSmScreen) {
                if (index === 2) {
                  return (
                    <Stack key={index}>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          backgroundImage: `url(${image})`,
                          width: { sm: '184px', lg: '184px' },
                          height: { sm: '184px', lg: '184px' },
                          borderRadius: '8px',
                          mb: 0,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                        }}
                        onClick={() => {
                          setLightBoxPhotoIndex(2)
                          setIsOpenLightBox(true)
                        }}
                      >
                        <Stack
                          width="100%"
                          height="100%"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ backgroundColor: 'rgba(133, 133, 133, 0.5)' }}
                        >
                          <Typography
                            style={{
                              color: theme.palette.white.main,
                              fontSize: '32px',
                              fontWeight: 600,
                            }}
                          >
                            +{images.length - index}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  )
                }

                if (index <= 1) {
                  return (
                    <Stack direction="row" key={index}>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        sx={{
                          backgroundImage: `url(${image})`,
                          width: { sm: '184px', lg: '184px' },
                          height: { sm: '184px', lg: '184px' },
                          borderRadius: '8px',
                          mb: 0,
                          cursor: 'pointer',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                        }}
                        onClick={() => {
                          setIsOpenLightBox(true)
                          setLightBoxPhotoIndex(index)
                        }}
                      />
                    </Stack>
                  )
                }
              }

              if (index > 2 && images.length > 2 && !belowLgScreen && !belowSmScreen) {
                if (index === 4) {
                  return (
                    <Stack key={index}>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          backgroundImage: `url(${image})`,
                          width: { sm: '184px', lg: '184px' },
                          height: { sm: '184px', lg: '184px' },
                          borderRadius: '8px',
                          mb: 0,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                        }}
                        onClick={() => {
                          setLightBoxPhotoIndex(4)
                          setIsOpenLightBox(true)
                        }}
                      >
                        <Stack
                          width="100%"
                          height="100%"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ backgroundColor: 'rgba(133, 133, 133, 0.5)' }}
                        >
                          <Typography
                            style={{
                              color: theme.palette.white.main,
                              fontSize: '32px',
                              fontWeight: 600,
                            }}
                          >
                            +{images.length - index}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  )
                }
              } else if (!belowLgScreen && !belowSmScreen) {
                return (
                  <Stack direction="row" key={index}>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      sx={{
                        backgroundImage: `url(${image})`,
                        width: { sm: '184px', lg: '184px' },
                        height: { sm: '184px', lg: '184px' },
                        borderRadius: '8px',
                        mb: 0,
                        cursor: 'pointer',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                      onClick={() => {
                        setIsOpenLightBox(true)
                        setLightBoxPhotoIndex(index)
                      }}
                    />
                  </Stack>
                )
              }
            })}
          </Stack>
        )
      }
    }
  }
  return (
    <Stack>
      <Stack>{displayImage(imageList ? imageList : [])}</Stack>
      {isOpenLightBox ? (
        <Stack>{displayLightBoxGalleryImage(imageList ? imageList : [])}</Stack>
      ) : undefined}
    </Stack>
  )
}
