import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { MouseEvent } from 'react'

interface NavLinkProps {
  href: string
  children: JSX.Element | string
  exact?: boolean
  className?: string
}

const NavLink = ({ href, children, exact, ...props }: NavLinkProps) => {
  const route = useRouter()
  const isActive = exact ? route.pathname === href : route.pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    route.push(href)
  }

  return (
    <a {...props} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}

export default NavLink
