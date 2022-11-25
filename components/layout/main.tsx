import * as React from 'react'
import { LayoutProps } from './layout'

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}
