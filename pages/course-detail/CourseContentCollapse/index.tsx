import React, { useState } from 'react'
import NavLink from '@components/NavLink'
import { COURSE_CONTENT_ROW } from '@enums/index'
import { Stack, Typography, Button } from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import { blue, grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { ExpandLessIcon, InsertDriveIcon, PlayArrowIcon } from 'libs/icons'

interface ContentList {
  id: number
  title: string
  time: string
  content: {
    id: number
    type: string
    title: string
    time: string
    isPreview: boolean
  }[]
}

const listContent: ContentList[] = [
  {
    id: 1,
    title: 'Introduction to NestJS & Pre-requisites',
    time: '6 min',
    content: [
      {
        id: 1,
        type: COURSE_CONTENT_ROW.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 3,
        type: COURSE_CONTENT_ROW.ASSIGNMENT,
        title: 'Installing Node.js and Yarn',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 5,
        type: COURSE_CONTENT_ROW.FILE,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Task Management Application (REST API)',
    time: '1hr52min',
    content: [
      {
        id: 1,
        type: COURSE_CONTENT_ROW.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 5,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Validation and Error handling',
    time: '20 min',
    content: [
      {
        id: 1,
        type: COURSE_CONTENT_ROW.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 3,
        type: COURSE_CONTENT_ROW.DOCUMENT,
        title: 'Installing Node.js and Yarn',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 4,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: 'Installing the NestJS CLI',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 5,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Data Persistence - PostgreSQL and TypeORM',
    time: '1hr09min',
    content: [
      {
        id: 1,
        type: COURSE_CONTENT_ROW.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 3,
        type: COURSE_CONTENT_ROW.DOCUMENT,
        title: 'Installing Node.js and Yarn',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 4,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: 'Installing the NestJS CLI',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 5,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
      {
        id: 6,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: 'Installing the NestJS CLI',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 7,
        type: COURSE_CONTENT_ROW.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
]

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    sx={{
      '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(180deg)',
        '&.Mui-expanded': {
          transform: 'rotate(0deg) !important',
          transition: '.3s',
        },
      },
    }}
    expandIcon={<ExpandLessIcon />}
    {...props}
  />
))(({ theme }) => ({
  padding: '5px 16px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : grey[50],
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

function showRowIcon(type?: string) {
  switch (type) {
    case COURSE_CONTENT_ROW.VIDEO:
      return <PlayArrowIcon />
    case COURSE_CONTENT_ROW.DOCUMENT:
      return <InsertDriveIcon />
    case COURSE_CONTENT_ROW.FILE:
      return <InsertDriveIcon />
    case COURSE_CONTENT_ROW.ASSIGNMENT:
      return <InsertDriveIcon />
    default:
      return null
  }
}

export default function CourseContentCollapse() {
  const [isExpandedAll, setIsExpandedAll] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<any>(new Array(listContent.length).fill(false))

  const handleChange = (indexItem: number) => {
    const newExpanded = [...expanded]
    newExpanded[indexItem] = !newExpanded[indexItem]
    setExpanded(newExpanded)
  }

  const handleClick = () => {
    const isExpanded = !isExpandedAll
    setIsExpandedAll(isExpanded)
    setExpanded(new Array(listContent.length).fill(isExpanded))
  }

  return (
    <>
      <Stack flexDirection="row" alignItems="flex-end" justifyContent="space-between" mb="10px">
        <Stack component="span" m="8px 0" fontSize="14px">
          13 phần • 136 bài giảng • 8h 44m tổng độ dài
        </Stack>
        <Button variant="text" sx={{ p: 0 }} onClick={handleClick} disableTouchRipple>
          {isExpandedAll ? 'Đóng' : 'Mở'} tất cả các phần
        </Button>
      </Stack>
      {listContent.map((item, index) => (
        <Accordion key={index} expanded={expanded[index]} onChange={() => handleChange(index)}>
          <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
            <Stack
              sx={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Stack component="span" fontSize="16px" fontWeight={700}>
                {item.title}
              </Stack>
              <Stack component="span" ml="24px">
                {item.content.length} bài giảng - {item.time}
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              {item.content.map((row) => (
                <Stack
                  component="li"
                  key={row.id}
                  flexDirection="row"
                  justifyContent="space-between"
                  p="4px 0"
                >
                  <Stack flexDirection="row" gap="10px">
                    {showRowIcon(row.type)}
                    <Typography
                      sx={
                        row.isPreview
                          ? { textDecoration: 'underline', color: blue[500], fontSize: '14px' }
                          : null
                      }
                    >
                      {row.title}
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row">
                    {row.isPreview && (
                      <NavLink href="#!">
                        <Typography sx={{ '&': { color: blue[500], textDecoration: 'underline' } }}>
                          Xem trước
                        </Typography>
                      </NavLink>
                    )}

                    <Stack component="span" ml="32px" color="#6a6f73">
                      {row.time}
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}
