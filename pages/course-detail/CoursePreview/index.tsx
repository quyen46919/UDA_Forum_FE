import React from 'react'
import NavLink from '@components/NavLink'
import { Button, Stack, Typography } from '@mui/material'
import {
  CardGiftIcon,
  CloudDownloadIcon, InsertDriveIcon,
  MobileFriendlyIcon,
  PlayArrowIcon
} from 'libs/icons'

export default function CoursePreview() {
  return (
    <Stack
      width={350}
      height="fit-content"
      position="absolute"
      ml="796px"
      top="100px"
      bgcolor="white.main"
      boxShadow={3}
    >
      {/* <Stack p="2px" boxSizing="border-box">
        <iframe
          width="100%"
          height="220px"
          src="https://www.youtube.com/embed/0M8AYU_hPas"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Stack> */}
      <Stack p="20px 30px" boxSizing="border-box">
        <Typography component="span" p="4px 0" mb="12px" fontSize="32px" fontWeight={700}>
          10000
        </Typography>
        <Button variant="contained" sx={{ height: 50 }}>
          <NavLink href="#">Thêm vào giỏ hàng</NavLink>
        </Button>
        <Button variant="contained" sx={{ height: 50, m: '8px 0' }}>
          <NavLink href="#">Mua ngay</NavLink>
        </Button>
        <Typography component="span" fontSize="12px" textAlign="center">
          Đảm bảo hoàn tiền trong 30 ngày
        </Typography>
        <Stack pt="16px">
          <Typography variant="h2" fontSize="16px" fontWeight={700} mb="8px">
            Khoá học này bao gồm:
          </Typography>
          <Stack
            component="ul"
            m={0}
            p={0}
            sx={{ '&': { listStyle: 'none', '& li': { p: '4px 0' } } }}
          >
            <Stack component="li" direction="row" alignItems="center" gap="10px">
              <PlayArrowIcon />
              <Typography component="span">8.5 giờ video theo yêu cầu</Typography>
            </Stack>
            <Stack component="li" direction="row" alignItems="center" gap="10px">
              <InsertDriveIcon />
              <Typography component="span">20 bài viết</Typography>
            </Stack>
            <Stack component="li" direction="row" alignItems="center" gap="10px">
              <CloudDownloadIcon />
              <Typography component="span">4 tài nguyên có thể tải về được</Typography>
            </Stack>
            <Stack component="li" direction="row" alignItems="center" gap="10px">
              <MobileFriendlyIcon />
              <Typography component="span">Truy cập được trên thiết bị di động và TV</Typography>
            </Stack>
            <Stack component="li" direction="row" alignItems="center" gap="10px">
              <CardGiftIcon />
              <Typography component="span">Chứng chỉ hoàn thành</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
