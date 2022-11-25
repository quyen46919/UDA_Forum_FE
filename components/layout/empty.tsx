import * as React from 'react'
import { LayoutProps } from './layout'

export function EmptyLayout(props: LayoutProps) {
  return <>{props.children}</>
}
