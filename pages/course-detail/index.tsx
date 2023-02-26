import React from 'react'
import EllipsisTypography from '@components/EllipsisTypography'
import Footer from '@components/Footer'
import NavLink from '@components/NavLink'
import { SlideHome1 } from '@images/index'
import { NextPageWithLayout } from '@layout/layout'
import { MainLayout } from '@layout/main'
import {
  Avatar,
  Box,
  Breadcrumbs,
  Divider,
  Rating,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import {
  CardGiftIcon,
  CheckIcon,
  FiberManualRecordIcon,
  GroupIcon,
  HomeIcon,
  LanguageIcon,
  PlayArrowIcon,
  StarFillIcon,
  SubtitlesIcon,
} from 'libs/icons'
import { capitalizeFirstLetter } from 'libs/utils'
import Link from 'next/link'
import { createRef, useEffect, useState } from 'react'
import CourseContentCollapse from './CourseContentCollapse'
import CoursePreview from './CoursePreview'
import CourseRecommend from './CourseRecommend'
import CourseReviews from './CourseReviews'

const homepageContent = [
  {
    id: 1,
    icon: <HomeIcon />,
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    content:
      'Lorem Ipsum has been the industrys a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 2,
    icon: <HomeIcon />,
    title: 'Printing and typesetting industry.',
    content:
      'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 3,
    icon: <HomeIcon />,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    content:
      'An unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
]
const courseCard = [
  {
    id: 1,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao cho người mới bắt đầu',
    price: 40,
    salePrice: 1000000,
    authorName: 'Hiếu Hồ',
    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 2,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 2300000,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 3,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 23220000000,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 4,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 10.99,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 5,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 10.99,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 6,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 10.99,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 7,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 10.99,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 8,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 10.99,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 9,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 10.99,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
  {
    id: 10,
    image: SlideHome1,
    name: 'Khóa học Frontend từ cơ bản đến nâng cao',
    price: 40,
    salePrice: 10.99,
    authorName: 'Hiếu Hồ',

    averageStar: 4.2,
    studentCount: 12424,
    totalHours: 12.5,
    updatedAt: '3/2021',
  },
]

const whatWillYouLearn: string[] = [
  'Becoming familiar with the NestJS framework and its components',
  'Designing and developing REST APIs performing CRUD operations',
  'Authentication and Authorization for back-end applications',
  'Using TypeORM for database interaction',
  'Security best practices, password hashing and storing sensitive information',
  'Persisting data using a database',
  'Deploying back-end applications at a production-ready state to Amazon Web Services',
  'Writing clean, maintainable code in-line with industry standards',
  'Utilising the NestJS Command Line Interface (CLI)',
  'Using Postman for testing back-end services',
  'Using pgAdmin as an interface tool to manage PostgreSQL databases',
  'Implement efficient logging in a back-end application',
  'Environment-based configuration management and environment variables',
  'Implementing data validation and using Pipes',
  'Guarding endpoints for authorized users using Guards',
  'Modelling entities for the persistence layer',
  'TypeScript best practices',
  'Handling asynchronous operations using async-await',
  'Using Data Transfer Objects (DTO)',
  'Hands-on experience with JSON Web Tokens (JWT)',
  'Unit testing NestJS applications',
  'Using GraphQL with NestJS',
  'Database persistence with MongoDB',
]

const studentReviews = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/40',
    name: 'G K S',
    rating: 5,
    createdAt: '2 weeks ago',
    content:
      'Complex topics are explained in a very easy languages with practical examples. Very Helpful for everyone. and even for someone with zero knowledge of any computer operations, or new to IT field. Thank You Sir.',
  },
  {
    id: 2,
    avatar: 'https://via.placeholder.com/40',
    name: 'Siddhant S.',
    rating: 5,
    createdAt: '10 months ago',
    content: `Very good course for people who are new to Salesforce.\nConcepts are explained very well`,
  },
  {
    id: 3,
    avatar: 'https://via.placeholder.com/40',
    name: 'Pooja B.',
    rating: 4,
    createdAt: '10 weeks ago',
    content:
      'Complex topics are explained in a very easy languages with practical examples. Very Helpful for everyone. and even for someone with zero knowledge of any computer operations, or new to IT field. Thank You Sir. Complex topics are explained in a very easy languages with practical examples. Very Helpful for everyone. and even for someone with zero knowledge of any computer operations, or new to IT field. Thank You Sir.',
  },
  {
    id: 4,
    avatar: 'https://via.placeholder.com/40',
    name: 'Pooja B.',
    rating: 4,
    createdAt: '10 weeks ago',
    content: 'happy with course and it is very useful for me. Trainer explains very well',
  },
  {
    id: 5,
    avatar: 'https://via.placeholder.com/40',
    name: 'Pooja B.',
    rating: 4,
    createdAt: '10 weeks ago',
    content: 'happy with course and it is very useful for me. Trainer explains very well',
  },
  {
    id: 6,
    avatar: 'https://via.placeholder.com/40',
    name: 'Pooja B.',
    rating: 4,
    createdAt: '10 weeks ago',
    content: 'happy with course and it is very useful for me. Trainer explains very well',
  },
  {
    id: 7,
    avatar: 'https://via.placeholder.com/40',
    name: 'Pooja B.',
    rating: 4,
    createdAt: '10 weeks ago',
    content: 'happy with course and it is very useful for me. Trainer explains very well',
  },
]

const breadcrumbs = [
  {
    id: 1,
    title: 'Development',
    href: '/#!',
  },
  {
    id: 2,
    title: 'Programming Languages',
    href: '/#!',
  },
  {
    id: 3,
    title: 'NextJS',
    href: '/#!',
  },
]

const CourseDetail: NextPageWithLayout = () => {
  const theme = useTheme()
  const ref = createRef<HTMLDivElement>()
  const [isReadMore, setIsReadMore] = useState<Boolean>(true)
  const [height, setHeight] = useState<number | undefined>()

  useEffect(() => {
    if (ref.current) {
      const heightContent = ref.current.clientHeight
      if (heightContent) setHeight(heightContent)
    }
  }, [])

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  const handleReadMore = () => {
    if (height !== undefined && height > 60) {
      if (isReadMore) return 'Xem thêm'
      if (!isReadMore) return ' Thu gọn'
    }
    return ''
  }

  return (
    <Stack>
      <Stack bgcolor={theme.palette.black.dark} color={theme.palette.white.main} p="32px 0">
        <Stack
          height="fit-content"
          margin="0 auto"
          width={{ lg: '1184px' }}
          maxWidth={{ lg: '1184px' }}
        >
          <Stack maxWidth="700px" m="0 48px">
            <Breadcrumbs
              sx={{
                '.MuiBreadcrumbs-separator': {
                  color: 'white !important',
                },
              }}
            >
              {breadcrumbs.map((pathname) => {
                const last = breadcrumbs[breadcrumbs.length - 1]
                return last ? (
                  <Link href={pathname.href} key={pathname.id}>
                    <a>
                      <Typography
                        sx={{
                          userSelect: 'none',
                          color: theme.palette.white.main,
                          fontSize: '14px',
                          fontWeight: 600,
                          '&:hover': { textDecoration: 'underline' },
                        }}
                        key={pathname.id}
                      >
                        {capitalizeFirstLetter(pathname.title)}
                      </Typography>
                    </a>
                  </Link>
                ) : (
                  <Link href={pathname.href} key={pathname.id}>
                    <a>
                      <Typography variant="body1" fontSize="14px" fontWeight={600}>
                        {capitalizeFirstLetter(pathname.title)}
                      </Typography>
                    </a>
                  </Link>
                )
              })}
            </Breadcrumbs>
            <Stack>
              <Typography fontSize="32px" mb="8px" variant="h1">
                NestJS Zero to Hero - Modern TypeScript Back-end Development
              </Typography>
              <Typography fontSize="18px" gutterBottom variant="body1" mb="16px">
                Develop and deploy enterprise back-end applications following best practices using
                Node.js and TypeScript
              </Typography>
              <Stack direction="row" alignItems="center" mb="8px">
                <NavLink href="#reviews">
                  <Stack direction="row" alignItems="center">
                    <Typography
                      component="span"
                      color="#f3ca8c"
                      fontWeight={700}
                      fontSize="16px"
                      mr="4px"
                    >
                      4.6
                    </Typography>
                    <Rating
                      defaultValue={4.6}
                      readOnly
                      sx={{ fontSize: '16px', color: '#f3ca8c' }}
                    />
                    <Typography
                      component="span"
                      sx={{ textDecoration: 'underline', color: theme.palette.lightGrey.main }}
                      ml="4px"
                    >
                      (7,894 ratings)
                    </Typography>
                  </Stack>
                </NavLink>
                <Typography ml="8px" variant="body1">
                  107,235 students
                </Typography>
              </Stack>
              <Typography component="span" mb="8px">
                <Typography component="span" fontSize="14px" fontWeight={400} mr="6px">
                  Created by
                </Typography>
                <NavLink href="#!">
                  <Typography
                    component="span"
                    sx={{ textDecoration: 'underline', color: theme.palette.lightGrey.main }}
                  >
                    Châu Quyền
                  </Typography>
                </NavLink>
                <Typography component="span" mr="6px">
                  ,
                </Typography>
                <NavLink href="#!">
                  <Typography
                    component="span"
                    sx={{ textDecoration: 'underline', color: theme.palette.lightGrey.main }}
                  >
                    Đình Quân
                  </Typography>
                </NavLink>
              </Typography>
              <Stack direction="row" gap="16px">
                <Typography component="span" fontSize="14px" fontWeight={400}>
                  Last updated 7/2021
                </Typography>
                <Stack direction="row" alignItems="center" gap="8px">
                  <LanguageIcon />
                  <Typography component="span" fontSize="14px" fontWeight={400}>
                    Tiếng việt
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap="8px">
                  <SubtitlesIcon />
                  <Typography component="span" fontSize="14px" fontWeight={400}>
                    Tiếng việt
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack margin="0 auto" width={{ lg: '1184px' }} maxWidth={{ lg: '1184px' }} pt="32px">
        <Stack maxWidth={{ lg: '700px' }} m="0 48px">
          <Stack border={`1px solid ${grey[200]}`} p="24px" pb="16px" mb="32px">
            <Typography variant="h2" fontSize="24px" fontWeight={700} mb="16px">
              Những gì mà bạn sẽ được học
            </Typography>
            <Box
              component="ul"
              display="grid"
              gridTemplateColumns="1fr 1fr"
              pl="0"
              gap="8px 32px"
              sx={{ listStyle: 'none' }}
            >
              {whatWillYouLearn.map((item: string, index: number) => (
                <Stack
                  direction="row"
                  gap="16px"
                  component="li"
                  key={index}
                  alignItems="flex-start"
                >
                  <CheckIcon />
                  <EllipsisTypography lineNumber={4} fontSize="14px">
                    {item}
                  </EllipsisTypography>
                </Stack>
              ))}
            </Box>
          </Stack>
          <Stack mb="32px">
            <Typography variant="h2" fontSize="24px" fontWeight={700} mb="16px">
              Nội dung khoá học
            </Typography>
            <CourseContentCollapse />
          </Stack>
          <Stack mb="32px">
            <Typography variant="h2" fontSize="24px" fontWeight={700} mb="16px">
              Yêu cầu
            </Typography>
            <Stack component="ul" pl="0" m="0" sx={{ listStyle: ' none' }}>
              <Stack
                component="li"
                direction="row"
                p="4px 0"
                sx={{ '& svg': { width: '14px', lineHeight: '22px' } }}
              >
                <FiberManualRecordIcon />
                <Typography variant="body1" ml="16px">
                  Having a basic understanding of JavaScript and/or NodeJS
                </Typography>
              </Stack>
              <Stack
                component="li"
                direction="row"
                p="4px 0"
                sx={{ '& svg': { width: '14px', lineHeight: '22px' } }}
              >
                <FiberManualRecordIcon />
                <Typography variant="body1" ml="16px">
                  Having a basic understanding of JavaScript and/or NodeJS
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack mb="32px">
            <Typography variant="h2" fontSize="24px" fontWeight={700} mb="16px">
              Mô tả
            </Typography>
            <>
              <Stack
                ref={ref}
                sx={
                  isReadMore
                    ? {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 6,
                        whiteSpace: 'normal',
                      }
                    : null
                }
              >
                <Stack component="strong" fontWeight={700} mb="6px">
                  NestJS is a Node.js back-end development framework built upon Express, leveraging
                  the power of TypeScript.
                </Stack>
                <Typography variant="body1">
                  {`NestJS is a Node.js back-end development framework built upon Express, leveraging the
                  power of TypeScript. \nNestJS leverages the incredible popularity and robustness of
                  JavaScript as a language and Node.js as a technology. It is inspired by common libraries
                  and frameworks such as Angular, React and Vue which improve developer productivity and
                  experience. \nEven considering the amount of superb libraries, helpers and tools that
                  exist for server-side Node.js, none of them effectively solve the main problem - the
                  architecture of an application. \nNestJS provides an out-of-the-box application
                  architecture which allows developers and teams to create highly testable, scalable,
                  loosely coupled and easily maintainable applications.`}
                </Typography>
                <Typography variant="h2" fontSize="24px" fontWeight={700} m="16px 0">
                  Khoá học này dành cho ai
                </Typography>
                <Stack component="ul" pl="0" m="0">
                  <Stack
                    component="li"
                    direction="row"
                    p="4px 0"
                    sx={{ '& svg': { width: '14px', lineHeight: '22px' } }}
                  >
                    <FiberManualRecordIcon />
                    <Typography variant="body1" ml="16px">
                      Having a basic understanding of JavaScript and/or NodeJS
                    </Typography>
                  </Stack>
                  <Stack
                    component="li"
                    direction="row"
                    p="4px 0"
                    sx={{ '& svg': { width: '14px', lineHeight: '22px' } }}
                  >
                    <FiberManualRecordIcon />
                    <Typography variant="body1" ml="16px">
                      Having a basic understanding of JavaScript and/or NodeJS
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                component="span"
                onClick={toggleReadMore}
                sx={{
                  cursor: 'pointer',
                  userSelect: 'none',
                  display: 'inline',
                  fontWeight: 600,
                  fontSize: '14px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {handleReadMore()}
              </Stack>
            </>
          </Stack>
          <Stack mb="32px">
            <Typography variant="h2" fontSize="24px" fontWeight={700} mb="16px">
              Những học viên khác cũng mua
            </Typography>
            <Stack divider={<Divider sx={{ m: '10px 0' }} />}>
              {courseCard.map((course) => (
                <CourseRecommend
                  key={course.id}
                  image={course.image}
                  name={course.name}
                  totalHours={course.totalHours}
                  star={course.averageStar}
                  studentCount={course.studentCount}
                  salePrice={course.salePrice}
                  updatedAt={course.updatedAt}
                />
              ))}
            </Stack>
          </Stack>
          <Stack mb="32px">
            <Typography variant="h2" fontSize="24px" fontWeight={700} mb="16px">
              Người hướng dẫn
            </Typography>
            <Stack>
              <NavLink href="#!">
                <Typography
                  fontSize="20px"
                  fontWeight={700}
                  color={blue[500]}
                  mb="4px"
                  sx={{ textDecoration: 'underline' }}
                >
                  Mohamed Salah
                </Typography>
              </NavLink>
              <Typography component="span" fontSize="16px" color="#6a6f73">
                CEO of TheCodex.me - Teaching 500,000+ Students how to code
              </Typography>
              <Stack flexDirection="row" mt="8px" alignItems="center">
                <Avatar
                  src="https://via.placeholder.com/100"
                  sx={{ width: 100, height: 100 }}
                  alt="author"
                />
                <Stack
                  component="ul"
                  pl={0}
                  m={0}
                  ml="16px"
                  sx={{
                    '& li': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      p: '4px 0',
                    },
                  }}
                >
                  <Typography component="li">
                    <StarFillIcon /> 4.4 Instructor Rating
                  </Typography>
                  <Typography component="li">
                    <CardGiftIcon />
                    73,293 Reviews
                  </Typography>
                  <Typography component="li">
                    <GroupIcon />
                    886,105 Students
                  </Typography>
                  <Typography component="li">
                    <PlayArrowIcon /> 16 Courses
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                ref={ref}
                mt="16px"
                sx={
                  isReadMore
                    ? {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 6,
                        whiteSpace: 'normal',
                      }
                    : null
                }
              >
                <Typography variant="body1">
                  Avinash Jain is currently a senior at UC Berkeley majoring in Electrical
                  Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online
                  educational platform focused on bringing the best programming content to hundreds
                  of thousands of students around the world.\nHis programming journey began at the
                  age of 10, starting off with simple Python scripts to crawl the weather. Since
                  then, he's worked at numerous companies and is professionally experienced in
                  Python, iOS Development and Web Development. He's launched a plethora of
                  applications in the App Store amassing thousands of downloads. Additionaly, he's
                  competed and won in several hackathons around the world including PennApps and
                  NWHacks.\nAvinash has a passion to teach - his enthusiasm and love for programming
                  is evident in every video. For the past 7 years he's been an instructor on Udemy
                  and he loves motivating and enabling others to pursue their programming dreams. He
                  hopes to help students realize the power of programming and jumpstart their
                  careers through his courses.\nCheckout TheCodex for all of his courses, fantastic
                  discounts, and any guidance or help.
                </Typography>
              </Stack>
              <Stack
                component="span"
                onClick={toggleReadMore}
                sx={{
                  cursor: 'pointer',
                  userSelect: 'none',
                  display: 'inline',
                  fontWeight: 600,
                  fontSize: '14px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {handleReadMore()}
              </Stack>
            </Stack>
          </Stack>
          <Stack id="reviews">
            <Stack
              direction="row"
              mb="24px"
              sx={{
                '& span': {
                  fontSize: '24px',
                  fontWeight: 700,
                },
                '& svg': {
                  lineHeight: '22px',
                  '&:first-of-type': {
                    mr: '4px',
                  },
                  '&:last-of-type': {
                    width: '10px',
                    m: '0 4px',
                  },
                },
              }}
            >
              <StarFillIcon />
              <Typography component="span">4.3 course rating</Typography>
              <FiberManualRecordIcon />
              <Typography component="span">19K ratings</Typography>
            </Stack>
            <Box display="grid" gridTemplateColumns="repeat(2, calc(50% - 10px))" gap="20px">
              <CourseReviews />
            </Box>
          </Stack>
        </Stack>
        <CoursePreview />
      </Stack>
      <Footer />
    </Stack>
  )
}

CourseDetail.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: { title: 'Chi tiết khoá học | UDA FORUM 2022' },
  }
}

export default CourseDetail
