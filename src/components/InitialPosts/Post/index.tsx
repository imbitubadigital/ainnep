import * as S from './styles'

// import {} from './interfaces';

export function Post(): JSX.Element {
  return (
    <S.Container>
      <S.ContentLeft>
        <h3>Nós sabemos que é difícil, e estamos aqui para lhe receber</h3>
      </S.ContentLeft>
      <S.ContentRight>
        <p>
          A AINNEP é formada por gente como você, somos uma associação dedicada
          a proporcionar o acesso aos cuidados da mente, através de
          profissionais da pscicologia e apoio pessoal.
        </p>
      </S.ContentRight>
    </S.Container>
  )
}
