import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { Social } from '../Social'
import { Navbar } from '../Navbar'
import { ToggleMobile } from '../ToggleMobile'
import { useState } from 'react'

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Container>
      <S.Content>
        <S.Top>
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                alt="Picture of the author"
                width={263}
                height={61}
              />
            </a>
          </Link>
          <S.Menu isOpen={isOpen}>
            <Navbar />
            <Social />
          </S.Menu>
          <ToggleMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </S.Top>
        <S.Bottom>
          <h2>
            Refúgio para uma mente
            <br />
            sobrecarregada
          </h2>
        </S.Bottom>
      </S.Content>
    </S.Container>
  )
}
