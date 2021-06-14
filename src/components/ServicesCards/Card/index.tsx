import * as S from './styles'
import Image from 'next/image'
import { PropsCard } from './interfaces'
import Link from 'next/link'

export function Card({ item }: PropsCard): JSX.Element {
  return (
    <S.Container>
      <S.Content>
        <Image src={`/${item.image}`} width="746px" height="666px" />
        <header>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </header>
      </S.Content>
      <S.Action>
        <Link href={`/service/${item.slug}`}>
          <a>
            Saiba mais
            <span />
          </a>
        </Link>
      </S.Action>
    </S.Container>
  )
}
