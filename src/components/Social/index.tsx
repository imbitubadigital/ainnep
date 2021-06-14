import * as S from './styles'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'

export function Social(): JSX.Element {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <Image src="/donation.svg" alt="Doação" width={32} height={32} />
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
