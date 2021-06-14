import * as S from './styles'
import Link from 'next/link'
export function Navbar(): JSX.Element {
  return (
    <S.Container>
      <Link href="/">
        <a>Nós</a>
      </Link>
      <Link href="/">
        <a>Serviços</a>
      </Link>
      <Link href="/">
        <a>Credenciais</a>
      </Link>
      <Link href="/">
        <a>Colabore</a>
      </Link>
      <Link href="/">
        <a>FAQ</a>
      </Link>
    </S.Container>
  )
}
