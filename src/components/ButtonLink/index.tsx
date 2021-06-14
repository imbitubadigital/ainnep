import * as S from './styles'
import { PropsButtonLink } from './interfaces'
import Link from 'next/link'
export function ButtonLink({ title, href }: PropsButtonLink): JSX.Element {
  return (
    <S.Container>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </S.Container>
  )
}
