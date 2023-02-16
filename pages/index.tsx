import React, { useState } from 'react'
import { TAGS } from '@enums/index'
import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import { Masonry } from '@mui/lab'
import {
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  Rating,
  Stack,
  SxProps,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  AccessTimeOutlineIcon,
  ArrowBackIOSIcon,
  ArrowForwardIOSIcon,
  ArrowRightIcon,
  CopyrightIcon,
  FavoriteFillIcon,
  FavoriteOutlineIcon,
  LanguageIcon,
  VideoCamOutlineIcon,
} from 'libs/icons'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import {
  Communication,
  Grammar,
  HomeImage,
  Presentation,
  SlideHome1,
  SlideHome2,
  SlideHome3,
  SlideHome4,
  SlideHome5,
  SlideHome6,
  SlideHome7,
  Writing,
} from '@images/index'
interface ArrowProps {
  'data-role'?: string
  className?: string
  style?: object
  currentSlide?: number
  slideCount?: number
  onClick?: () => void
  sx?: SxProps
}
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const slides = [
  {
    title: 'Upgrade you skills for better future',
    src: SlideHome1,
  },
  {
    title: 'Unlock the power of your people',
    src: SlideHome2,
  },
  {
    title: 'Learning that gets you',
    src: SlideHome3,
  },
  {
    title: 'Skills for your present future.',
    src: SlideHome4,
  },
]

const recommendCourses = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: SlideHome6,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: SlideHome7,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: SlideHome1,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: SlideHome2,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: SlideHome5,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: SlideHome4,
  },
]

const features = [
  {
    title: 'Học mọi thứ, mọi nơi',
    desc: 'Tìm hiểu tài liệu bạn thích và có thể được truy cập ở bất cứ đâu',
    src: HomeImage,
  },
  {
    title: 'Ứng dụng thực tế',
    desc: 'Các dự án được xây dựng dựa trên ứng dụng thực tế và bạn có thể tạo danh mục đầu tư',
    src: HomeImage,
  },
  {
    title: 'Thảo luận 24/7',
    desc: 'Chúng tôi luôn ở bên bạn nếu bạn gặp khó khăn trong việc học các khóa học',
    src: HomeImage,
  },
  {
    title: 'Lên lịch với các cố vấn, người hướng dẫn chuyên nghiệp',
    desc: 'Đặt lịch gặp chuyên gia tư vấn để có kiến thức chuyên sâu',
    src: HomeImage,
  },
  {
    title: 'Giấy chứng nhận',
    desc: 'Hoàn thành các lớp học và bài tập cuối khóa để nhận chứng chỉ từ chúng tôi',
    src: HomeImage,
  },
  {
    title: 'Tải lên danh mục đầu tư',
    desc: 'Sau khi hoàn thành khoá học, bạn có thể tải các dự án mà bạn đã làm lên nền tảng của chúng tôi',
    src: HomeImage,
  },
]

const skills = [
  {
    title: 'Lớp học kỹ năng giao tiếp và trí tuệ xã hội',
    reviews: 340,
    stars: 4.5,
    price: 300000,
    videos: 200,
    time: 52,
    liked: false,
    img: Communication,
  },
  {
    title: 'Viết về du lịch: Khám phá Thế giới & Xuất bản Câu chuyện của Bạn!',
    reviews: 210,
    stars: 4,
    price: 150000,
    videos: 52,
    time: 24,
    liked: true,
    img: Writing,
  },
  {
    title: 'Ra mắt ngữ pháp tiếng Anh: Nâng cấp kỹ năng nghe và nói của bạn',
    reviews: 780,
    stars: 5,
    price: 210000,
    videos: 52,
    time: 120,
    liked: true,
    img: Grammar,
  },
  {
    title: 'Thuyết trình trước đám đông',
    reviews: 520,
    stars: 4.8,
    price: 12000,
    videos: 12,
    time: 24,
    liked: false,
    img: Presentation,
  },
]
const tabsData = [
  {
    title: 'Lớp học kỹ năng giao tiếp và trí tuệ xã hội',
    reviews: 340,
    stars: 4.5,
    price: 300000,
    videos: 200,
    time: 52,
    liked: false,
    img: Communication,
    options: [0, 1],
  },
  {
    title: 'Viết về du lịch: Khám phá Thế giới & Xuất bản Câu chuyện của Bạn!',
    reviews: 210,
    stars: 4,
    price: 150000,
    videos: 52,
    time: 24,
    liked: true,
    img: Writing,
    options: [0, 1, 2],
  },
  {
    title: 'Ra mắt ngữ pháp tiếng Anh: Nâng cấp kỹ năng nghe và nói của bạn',
    reviews: 780,
    stars: 5,
    price: 210000,
    videos: 52,
    time: 120,
    liked: true,
    img: Grammar,
    tags: [0, 1],
  },
  {
    title: 'Thuyết trình trước đám đông',
    reviews: 520,
    stars: 4.8,
    price: 12000,
    videos: 12,
    time: 24,
    liked: false,
    img: Presentation,
    tags: [0, 1, 2],
  },
  {
    title: 'Ra mắt ngữ pháp tiếng Anh: Nâng cấp kỹ năng nghe và nói của bạn',
    reviews: 780,
    stars: 5,
    price: 210000,
    videos: 52,
    time: 120,
    liked: true,
    img: Grammar,
    tags: [0],
  },
  {
    title: 'Thuyết trình trước đám đông',
    reviews: 520,
    stars: 4.8,
    price: 12000,
    videos: 12,
    time: 24,
    liked: false,
    img: Presentation,
    tags: [0, 1, 2],
  },
]

const careers = [
  { label: 'User Interface Designer' },
  { label: 'User-Experience Designer' },
  { label: 'Product Designer' },
  { label: 'Digital Marketing' },
  { label: 'React Front-End Developer' },
  { label: 'Front-End Web Developer' },
  { label: 'Data Science' },
  { label: 'Network Engineering' },
  { label: 'Business Intelligence Developers' },
  { label: 'Security Engineer' },
  { label: 'Computer Forensic Specialist' },
  { label: 'More Out' },
]

const reviews = [
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Doamond Forest',
    desc: 'NLP - NAtural Langua processing w/Python',
    stars: 5,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Hoang Van A',
    desc: 'Fullstack Developer',
    stars: 5,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Hoang Van B',
    desc: 'Angular Developer',
    stars: 5,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Hoang Van C',
    desc: 'VueJS Developer',
    stars: 4.8,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quan Phung',
    desc: 'React Front-End Developer',
    stars: 4.5,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quyen',
    desc: 'Back-End Developer',
    stars: 4,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Hoang Van C',
    desc: 'VueJS Developer',
    stars: 4.8,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quan Phung',
    desc: 'React Front-End Developer',
    stars: 4.5,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quyen',
    desc: 'Back-End Developer',
    stars: 4,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Hoang Van C',
    desc: 'VueJS Developer',
    stars: 4.8,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quan Phung',
    desc: 'React Front-End Developer',
    stars: 4.5,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quyen',
    desc: 'Back-End Developer',
    stars: 4,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Hoang Van C',
    desc: 'VueJS Developer',
    stars: 4.8,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quan Phung',
    desc: 'React Front-End Developer',
    stars: 4.5,
  },
  {
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat in ea consequuntur, eligendi nam voluptas inventore ut recusandae repellat voluptatem quas, rem deserunt veniam ratione modi, doloremque natus quo. Excepturi?',
    author: 'Quyen',
    desc: 'Back-End Developer',
    stars: 4,
  },
]

function NextArrow(props: ArrowProps) {
  const { onClick, sx } = props

  return (
    <IconButton onClick={onClick} sx={sx}>
      <ArrowForwardIOSIcon />
    </IconButton>
  )
}
function PrevArrow(props: ArrowProps) {
  const { onClick, sx } = props

  return (
    <IconButton onClick={onClick} sx={sx}>
      <ArrowBackIOSIcon />
    </IconButton>
  )
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Stack sx={{ width: '100%' }}>{children}</Stack>}
    </div>
  )
}

const Home: NextPageWithLayout = () => {
  const [limitElement, setLimitElement] = useState<number>(5)
  const [tabs, setTabs] = useState(0)

  const theme = useTheme()
  const upXl = useMediaQuery('(min-width:100em)')

  const handleDelete = () => {}

  const showElement = reviews.slice(0, limitElement)
  const handleShowMore = () => {
    if (reviews.length > limitElement) {
      setLimitElement(limitElement + limitElement)
    } else {
      setLimitElement(5)
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabs(newValue)
  }

  const handleRenderTagsColor = (tagNumber: number) => {
    if (tagNumber === TAGS.NEW) return '#FECC52'
    if (tagNumber === TAGS.SPECIAL_OFFER) return '#E6D1FE'
    return '#6CFFA7'
  }

  const handleRenderTagsLabel = (tagNumber: number) => {
    if (tagNumber === TAGS.NEW) return 'Mới'
    if (tagNumber === TAGS.SPECIAL_OFFER) return 'Khuyến mãi đặc biệt'
    return 'Bán chạy nhất'
  }

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.white.main,
        '& > .slick-slider': {
          width: '100%',
          height: 'fit-content !important',
        },
      }}
      direction={{ xs: 'column', lg: 'column' }}
      minHeight="calc(100vh - 70px)"
      maxWidth={{ lg: '1536px', xl: '1920px' }}
    >
      <Slider
        dots={true}
        infinite={true}
        initialSlide={0}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        autoplay={true}
        autoplaySpeed={4000}
        pauseOnHover={false}
        appendDots={(dots) => {
          return (
            <Stack
              maxWidth="200px"
              left="50px"
              bottom="25px !important"
              component="ul"
              sx={{
                '&.slick-dots': {
                  p: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  '& > li': {
                    display: 'flex',
                    gap: '25px',
                    width: 'unset',
                    alignItems: 'center',
                    '& button::before': {
                      content: 'none',
                    },
                    '&.slick-active button': {
                      background: theme.palette.darkOrange.main,
                      borderRadius: '35px',
                      width: '40px',
                      height: '10px',
                    },
                    '& button': {
                      background: '#ff8a65',
                      borderRadius: '50%',
                      width: '10px',
                      height: '10px',
                    },
                  },
                },
              }}
            >
              {dots}
            </Stack>
          )
        }}
      >
        {slides.map((slide, index) => (
          <Stack
            key={index}
            direction="row"
            display="flex !important"
            sx={{
              p: '0 50px',
              height: upXl ? '700px' : '450px',
              width: '100%',
              userSelect: 'none',
            }}
          >
            <Stack p="50px 0" justifyContent="flex-end" width="60%">
              <Stack width="80%">
                <Typography variant="h1" fontWeight={500} fontSize="85px" lineHeight={1.4}>
                  {slide.title}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              position="relative"
              width="40%"
              sx={{
                '& img': { position: 'relative !important', height: '100%' },
              }}
            >
              <Image src={slide.src} layout="fill" objectFit="cover" alt="slideshow" />
            </Stack>
          </Stack>
        ))}
      </Slider>
      <Stack direction="row" p="50px" height="400px">
        <Stack minWidth="500px" justifyContent="center">
          <Typography variant="h2" fontSize="32px" fontWeight={500}>
            Khóa học gợi ý cho bạn
          </Typography>
          <Typography variant="body1" mt="20px" mb="30px" color="#707683">
            Cần giúp đỡ để tìm khóa học phù hợp?
          </Typography>
          <Button variant="contained" sx={{ width: 'fit-content' }}>
            Phân tích Cá nhân hóa
          </Button>
        </Stack>
        <Stack
          direction="row"
          flex="1"
          sx={{
            position: 'relative',
            maxWidth: 'calc(100% - 500px)',
            '& > .slick-slider': {
              width: '100%',
              height: 'fit-content !important',
            },
            '& button:first-of-type': {
              display: 'none !important',
            },
            '& .slick-list': {
              '& .slick-track': {
                display: 'flex',
                flexDirection: 'row',
                '.slick-slide': {
                  width: '30% !important',
                },
              },
            },
          }}
        >
          <Slider
            infinite={true}
            initialSlide={0}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
            lazyLoad="progressive"
            autoplaySpeed={4000}
            pauseOnHover={true}
            nextArrow={
              <NextArrow
                sx={{
                  background: theme.palette.primary.main,
                  p: '10px',
                  position: 'absolute',
                  top: '50%',
                  right: '-20px',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 100,
                }}
              />
            }
          >
            {recommendCourses.map((course, index) => (
              <Stack
                key={index}
                position="relative"
                display="flex !important"
                gap="10px"
                sx={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  '& img': {
                    borderRadius: '5px',
                  },
                  '& > span, & p': {
                    width: '95% !important',
                  },
                }}
              >
                <Image src={course.src} objectFit="cover" alt="slideshow" />
                <Typography>{course.title}</Typography>
                <Stack width="95%">
                  <Chip
                    sx={{
                      width: 'fit-content',
                      height: 'fit-content',
                      padding: '6px 0',
                      borderRadius: '5px',
                      backgroundColor: '#6cffa7',
                      fontWeight: 600,
                    }}
                    label="Khoá học tốt nhất"
                  />
                </Stack>
              </Stack>
            ))}
          </Slider>
        </Stack>
      </Stack>
      <Stack direction="column" p="50px" height="700px" gap="50px">
        <Typography variant="h2" fontSize="40px" fontWeight={400}>
          Tại sao lại là UDA Forum?
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          {features.map((feature, index) => (
            <Stack
              key={index}
              width="calc(100% / 3)"
              height="fit-content"
              p="35px"
              sx={{
                '& span': {
                  width: '60px !important',
                  height: '60px !important',
                },
              }}
            >
              <Image src={feature.src} objectFit="cover" alt="image" />
              <Typography
                variant="h2"
                fontSize="32px"
                fontWeight={500}
                lineHeight={1.4}
                m="15px 0 5px 0"
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                fontSize="18px"
                fontWeight={400}
                color="#707683"
                lineHeight={1.6}
              >
                {feature.desc}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack p="50px" maxHeight="950px">
        <Typography variant="h2" fontSize="40px" fontWeight={400} mb="50px">
          Khám phá những khoá học hàng đầu
        </Typography>
        <Tabs value={tabs} onChange={handleChange} variant="scrollable">
          <Tab label="Tất cả danh mục" />
          <Tab label="Sự phát triển" />
          <Tab label="IT & Phần mềm" />
        </Tabs>
        <TabPanel value={tabs} index={0}>
          <Stack
            sx={{
              '& .slick-slider': {
                height: '640px',
                '& .slick-list': {
                  '& .slick-track': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& > div': {
                      mr: '16px',
                    },
                  },
                },
              },
            }}
          >
            <Slider
              dots={true}
              infinite={true}
              initialSlide={0}
              speed={500}
              slidesToShow={4}
              slidesToScroll={4}
              lazyLoad="progressive"
              autoplaySpeed={4000}
              pauseOnHover={true}
              prevArrow={
                <PrevArrow
                  sx={{
                    background: theme.palette.primary.main,
                    p: '10px',
                    position: 'absolute',
                    bottom: upXl ? '20px' : '5px',
                    right: '70px',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 100,
                    '&:hover svg path': {
                      fill: theme.palette.white.main,
                    },
                  }}
                />
              }
              nextArrow={
                <NextArrow
                  sx={{
                    background: theme.palette.primary.main,
                    p: '10px',
                    position: 'absolute',
                    bottom: upXl ? '20px' : '5px',
                    right: '20px',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 100,
                    '&:hover svg path': {
                      fill: theme.palette.white.main,
                    },
                  }}
                />
              }
              appendDots={(dots) => {
                return (
                  <Stack
                    maxWidth="200px"
                    left={0}
                    bottom="48px !important"
                    component="ul"
                    sx={{
                      '&.slick-dots': {
                        p: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        '& > li': {
                          display: 'flex',
                          gap: '25px',
                          width: 'unset',
                          alignItems: 'center',
                          '& button::before': {
                            content: 'none',
                          },
                          '&.slick-active button': {
                            background: theme.palette.darkOrange.main,
                            borderRadius: '35px',
                            width: '40px',
                            height: '10px',
                          },
                          '& button': {
                            background: '#ff8a65',
                            borderRadius: '50%',
                            width: '10px',
                            height: '10px',
                          },
                        },
                      },
                    }}
                  >
                    {dots}
                  </Stack>
                )
              }}
            >
              {tabsData.map((tab, index) => (
                <Stack key={index} display="flex !important" gap="15px">
                  <Stack
                    height="280px"
                    sx={{
                      '& > span': { height: '100% !important' },
                      '& img': { borderRadius: '5px', cursor: 'pointer' },
                    }}
                  >
                    <Image src={tab.img} objectFit="cover" alt="tabs" />
                  </Stack>
                  <Tooltip title={tab.title} placement="top-end">
                    <Typography
                      variant="body1"
                      fontSize="22px"
                      fontWeight="500"
                      lineHeight="1.2"
                      height="55px"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {tab.title}
                    </Typography>
                  </Tooltip>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center">
                      <Rating defaultValue={tab.stars} readOnly />
                      <Typography variant="body1" color="#707683">
                        ({tab.reviews} lượt đánh giá)
                      </Typography>
                    </Stack>
                    <Typography variant="body1" fontSize="22px" fontWeight={600}>
                      {tab.stars}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" gap="10px">
                      <Typography fontWeight={600} fontSize="26px">
                        {tab.price} VND
                      </Typography>
                      <Typography
                        sx={{ textDecoration: 'line-through' }}
                        fontWeight={400}
                        fontSize="20px"
                        color="#707683"
                      >
                        {tab.price} VND
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" gap="10px">
                      <Stack direction="row" gap="3px" alignItems="center">
                        <VideoCamOutlineIcon />
                        <Typography variant="body1" color="#707683" fontSize="18px">
                          {tab.videos}
                        </Typography>
                      </Stack>
                      <Stack direction="row" gap="3px" alignItems="center">
                        <AccessTimeOutlineIcon />
                        <Typography variant="body1" color="#707683" fontSize="18px">
                          {tab.time}h
                        </Typography>
                      </Stack>
                    </Stack>
                    {tab.liked ? (
                      <IconButton
                        sx={{
                          p: '10px',
                          cursor: 'pointer',
                          background: theme.palette.primary.main,
                        }}
                      >
                        <FavoriteFillIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        sx={{
                          p: '10px',
                          cursor: 'pointer',
                          background: theme.palette.primary.main,
                          '&:hover': {
                            '& svg path': {
                              fill: theme.palette.white.main,
                            },
                          },
                        }}
                      >
                        <FavoriteOutlineIcon />
                      </IconButton>
                    )}
                  </Stack>
                  <Stack direction="row" gap="10px" width="95%">
                    {tab.tags?.map((tag) => (
                      <Chip
                        sx={{
                          width: 'fit-content',
                          height: 'fit-content',
                          padding: '6px 0',
                          borderRadius: '5px',
                          backgroundColor: handleRenderTagsColor(tag),
                          fontWeight: 600,
                        }}
                        key={tag}
                        label={handleRenderTagsLabel(tag)}
                      />
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Slider>
          </Stack>
        </TabPanel>
      </Stack>
      <Stack p="50px" height="700px">
        <Typography variant="h2" fontSize="40px" fontWeight={400} mb="50px">
          Mở khoá thêm một vài kỹ năng mới
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          {skills.map((skill, index) => (
            <Stack gap="15px" width="24%" height="fit-content" key={index}>
              <Stack
                height="280px"
                sx={{
                  '& > span': { height: '100% !important' },
                  '& img': { borderRadius: '5px', cursor: 'pointer' },
                }}
              >
                <Image src={skill.img} objectFit="cover" alt="communication" />
              </Stack>
              <Tooltip title={skill.title} placement="top-end">
                <Typography
                  variant="body1"
                  fontSize="22px"
                  fontWeight="500"
                  lineHeight="1.2"
                  height="55px"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {skill.title}
                </Typography>
              </Tooltip>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" alignItems="center">
                  <Rating defaultValue={skill.stars} readOnly />
                  <Typography variant="body1" color="#707683">
                    ({skill.reviews} lượt đánh giá)
                  </Typography>
                </Stack>
                <Typography variant="body1" fontSize="22px" fontWeight={600}>
                  {skill.stars}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" gap="10px">
                  <Stack direction="row" gap="3px" alignItems="center">
                    <VideoCamOutlineIcon />
                    <Typography variant="body1" color="#707683" fontSize="18px">
                      {skill.videos} videos
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap="3px" alignItems="center">
                    <AccessTimeOutlineIcon />
                    <Typography variant="body1" color="#707683" fontSize="18px">
                      {skill.time} giờ
                    </Typography>
                  </Stack>
                </Stack>
                {skill.liked ? (
                  <IconButton
                    sx={{ p: '10px', cursor: 'pointer', background: theme.palette.primary.main }}
                  >
                    <FavoriteFillIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{
                      p: '10px',
                      cursor: 'pointer',
                      background: theme.palette.primary.main,
                      '&:hover': {
                        '& svg path': {
                          fill: theme.palette.white.main,
                        },
                      },
                    }}
                  >
                    <FavoriteOutlineIcon />
                  </IconButton>
                )}
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack gap="10px">
                  <Typography fontWeight={600} fontSize="26px">
                    {skill.price} VND
                  </Typography>
                  <Typography
                    sx={{ textDecoration: 'line-through' }}
                    fontWeight={400}
                    fontSize="20px"
                    color="#707683"
                  >
                    {skill.price} VND
                  </Typography>
                </Stack>
                <Button variant="contained">Tham gia khoá học</Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack direction="row" height="300px">
        <Stack width="50%" p="50px" gap="10px">
          <Typography variant="body1" fontWeight={600}>
            Khoá học mới
          </Typography>
          <Stack
            sx={{
              height: '120px',
              '& h2': {
                fontSize: '36px',
                lineHeight: 1.4,
                fontWeight: 600,
              },
            }}
          >
            <Typography variant="h2">Bạn đang tìm khoá học tiếp theo?</Typography>
            <Typography variant="h2">Tìm kiếm nội dung của chúng tôi tại đây</Typography>
          </Stack>
          <Button variant="contained" sx={{ width: '200px' }}>
            Duyệt khóa học
          </Button>
        </Stack>
        <Stack width="50%" p="50px" gap="10px">
          <Typography variant="body1" fontWeight={600}>
            Portfolio
          </Typography>
          <Stack
            sx={{
              height: '120px',
              '& h2': {
                fontSize: '36px',
                lineHeight: 1.4,
                fontWeight: 600,
              },
            }}
          >
            <Typography variant="h2">
              Khám phá, các dự án thực tế để tạo và hỗ trợ các thành viên khác
            </Typography>
          </Stack>
          <Button variant="contained" sx={{ width: '200px' }}>
            Duyệt dự án
          </Button>
        </Stack>
      </Stack>

      <Stack p="50px" minHeight="500px">
        <Typography variant="h2" fontSize="40px" lineHeight={1.4} fontWeight={400}>
          Khám phá Lộ trình cho Sự nghiệp
        </Typography>
        <Typography color="#707683" fontSize="18px" mt="10px">
          Tìm vai trò tiếp theo của bạn
        </Typography>
        <List
          sx={{
            '&': {
              display: 'flex',
              flexWrap: 'wrap',
              mt: '50px',
              gap: '25px',
              '.MuiListItem-root': {
                width: 'unset',
              },
              '&	.MuiChip-root': {
                height: '60px',
                borderRadius: '9999px',
                border: `1px solid ${theme.palette.darkOrange.main}`,
                '&:hover': {
                  backgroundColor: theme.palette.orange.main,
                  color: theme.palette.white.main,
                  cursor: 'pointer',
                  '& svg path': {
                    stroke: 'white',
                  },
                },
                '& span': {
                  lineHeight: '60px',
                  p: '0 25px',
                  fontSize: '26px',
                  fontWeight: 500,
                },
                '& svg': {
                  m: 0,
                  marginRight: '25px',
                },
              },
            },
          }}
        >
          {careers.map((carrer, index) => (
            <ListItem key={index} disablePadding>
              <Chip
                variant="outlined"
                label={carrer.label}
                deleteIcon={<ArrowRightIcon />}
                onDelete={handleDelete}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Stack
        p="50px"
        minHeight="100vh"
        gap="50px"
        sx={{
          position: 'relative',
        }}
      >
        <Typography variant="h2" fontSize="40px" lineHeight={1.4} fontWeight={400}>
          Khám phá đánh giá của các thành viên
        </Typography>
        <Masonry columns={3} spacing={3}>
          {showElement.map((review, index) => (
            <Stack gap="30px" height="fit-content" key={index}>
              <Typography variant="body1" fontWeight={500} lineHeight={1.4} fontSize="24px">
                {review.title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Stack>
                  <Typography fontSize="20px" fontWeight={600} mb="12px">
                    {review.author}
                  </Typography>
                  <Typography fontSize="16px" fontWeight={500} color="#707683">
                    {review.desc}
                  </Typography>
                </Stack>
                <Rating defaultValue={review.stars} readOnly />
              </Stack>
              <Divider sx={{ mb: '22px' }} />
            </Stack>
          ))}
        </Masonry>
        <Stack
          onClick={handleShowMore}
          alignItems="center"
          justifyContent="flex-end"
          position="absolute"
          sx={{
            background:
              'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(121,103,9,0) 51%, rgba(255,68,1,0.15) 100%)',
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, 0%)',
            height: '400px',
            width: '100%',
            cursor: 'pointer',
          }}
        >
          <Button onClick={handleShowMore} variant="contained" sx={{ width: '240px', mb: '50px' }}>
            {reviews.length > limitElement ? 'Hiện thêm' : 'Ẩn đi'}
          </Button>
        </Stack>
      </Stack>
      <Stack height="580px" direction="row" justifyContent="space-between">
        <Stack pl="50px" gap="25px" justifyContent="center" width="45%">
          <Typography variant="h1" fontSize="45px" fontWeight="500" lineHeight={1.4}>
            Tham gia cùng hơn
            <Stack
              component="span"
              display="inline-block"
              m="0 8px"
              fontSize="60px"
              color={theme.palette.orange.main}
            >
              10.000
            </Stack>
            người học trên toàn thế giới
          </Typography>
          <Button variant="contained" sx={{ width: '220px' }}>
            Đăng ký ngay
          </Button>
        </Stack>
        <Stack
          sx={{
            width: '50%',
            '& > span': {
              height: '100% !important',
            },
          }}
        >
          <Image src={SlideHome1} objectFit="cover" alt="background" />
        </Stack>
      </Stack>
      <Stack
        direction="column"
        pt="100px"
        height="580px"
        sx={{ background: theme.palette.black.main }}
        color={theme.palette.white.main}
      >
        <Stack p="0 50px" direction="row">
          <Stack flex="1">
            <Typography variant="h2" fontSize="26px">
              UDA Forum
            </Typography>
            <Typography
              variant="body1"
              mt="26px"
              mb="50px"
              width="80%"
              fontSize="18px"
              lineHeight={1.4}
            >
              UDA Forum là một nền tảng học tập và trao đổi kiến thức trực tuyến với bất kỳ ai, bất
              kỳ đâu cũng có thể truy cập vào các kháo học trực tuyến.
            </Typography>
            <Button variant="contained" sx={{ width: '220px' }} startIcon={<LanguageIcon />}>
              Tiếng Việt
            </Button>
          </Stack>
          <Stack
            flex="1"
            direction="row"
            gap="50px"
            justifyContent="flex-end"
            sx={{
              '& .MuiList-root': {
                '.MuiListSubheader-root': {
                  backgroundColor: 'transparent',
                  color: theme.palette.white.main,
                  fontSize: '22px',
                  fontWeight: 600,
                },
                '.MuiListItem-root': {
                  fontSize: '18px',
                  fontWeight: 400,
                },
              },
            }}
          >
            <List>
              <ListSubheader>UDA Forum</ListSubheader>
              <ListItem>
                <Link href="/">Về chúng tôi</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Dạy học trên UDA Forum</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Lộ trình</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Sự nghiệp</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Tin tức</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Đội chúng tôi</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Trở thành một người cộng sự</Link>
              </ListItem>
            </List>
            <List>
              <ListSubheader>Cộng đồng</ListSubheader>
              <ListItem>
                <Link href="/">Portfolio</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Những nhà phát triển</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Lời chứng thực</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Blogs</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Giao thiệp</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Học bổng</Link>
              </ListItem>
            </List>
            <List>
              <ListSubheader>Nhiều hơn</ListSubheader>
              <ListItem>
                <Link href="/">FAQ</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Trung tâm giúp đỡ</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Điều luật</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Sự riêng tư</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Mã sản phẩm</Link>
              </ListItem>
              <ListItem>
                <Link href="/">Thiết lập Cookie</Link>
              </ListItem>
            </List>
          </Stack>
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{ mt: '50px', border: `1px solid ${theme.palette.white.main}` }}
        />
        <Stack
          p="0 50px"
          direction="row"
          justifyContent="space-between"
          height="100px"
          alignItems="center"
        >
          <Stack direction="row" sx={{ '& a': { cursor: 'pointer' } }}>
            <Link href="/">
              <a>
                <FavoriteOutlineIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FavoriteOutlineIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FavoriteOutlineIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FavoriteOutlineIcon />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FavoriteOutlineIcon />
              </a>
            </Link>
          </Stack>
          <Stack direction="row" gap="5px" height="fit-content">
            <CopyrightIcon />
            <Typography variant="body1" fontSize="18px">
              UDA Forum, Inc. All rights reserved.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
Home.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'UDA FORUM 2022' },
  }
}

export default Home
