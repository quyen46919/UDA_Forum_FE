import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavLinkProps {
  href: string
  children: JSX.Element
  exact?: boolean
  className?: string
}

const NavLink = ({ href, children, exact, ...props }: NavLinkProps) => {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

export default NavLink
