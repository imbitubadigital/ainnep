import * as S from './styles'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaYoutube, FaBoxOpen } from 'react-icons/fa'

import { PropsSocial } from './interface'
export function Social({ isBottom = false }: PropsSocial): JSX.Element {
  return (
    <S.Container isBottom={isBottom}>
      <Link href="/">
        <a>
          <FaBoxOpen size={26} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaInstagram size={26} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaYoutube size={26} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaTwitter size={26} />
        </a>
      </Link>
    </S.Container>
  )
}
