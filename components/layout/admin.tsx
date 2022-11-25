import { Box } from '@mui/material'
import Link from 'next/link'
import { LayoutProps } from './layout'

export function AdminLayout(props: LayoutProps) {
  return (
    <Box>
      <h1>Admin layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <button>Logout</button>
      <div>{props.children}</div>
    </Box>
  )
}
