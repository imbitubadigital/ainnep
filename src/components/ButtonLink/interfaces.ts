import { title } from 'process'
import { LinkProps } from 'next/link'
export interface PropsButtonLink extends LinkProps {
  title: string
  href: string
}
