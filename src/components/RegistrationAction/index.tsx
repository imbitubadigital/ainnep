import Link from 'next/link'
import * as S from './styles'

// import {} from './interfaces';

export function RegistrationAction(): JSX.Element {
  return (
    <S.Container>
      <S.Content>
        <h4>Efetue seu cadastro</h4>
        <Link href="/">
          <a>clique aqui para cadastrar-se para receber atendimento</a>
        </Link>
      </S.Content>
    </S.Container>
  )
}
