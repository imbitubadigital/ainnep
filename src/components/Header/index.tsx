import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { Social } from '../Social'
import { Navbar } from '../Navbar'

// import {} from './interfaces';

export function Header(): JSX.Element {
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
          <Navbar />
          <Social />
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
