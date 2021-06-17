import * as S from './styles'
import { BiStore } from 'react-icons/bi'

export function Company(): JSX.Element {
  return (
    <S.Container>
      <S.Box>
        <h6>As Empresas</h6>
        <p>
          Sua empresa pode ser um parceiro da AINNEP, proporcionando a nós
          visibilidade e alcance para tornar nosso propósito cada vez mais
          relevante e presente em nossa sociedade.
        </p>
        <p>
          Ao fazer parte dessa parceria sua empresa receberá o auxílio fiscal e
          um selo de “Amigos da AINNEP” que é a nossa forma de dizer a você
          nosso muito obrigado por auxiliar tantas pessoas e mostrar para
          sociedade que sua empresa é conciente e aposta num mundo melhor.
        </p>
        <S.ContentButton>
          <button type="button">
            <BiStore />
            <span>Seja um amigo da AINNEP </span>
          </button>
        </S.ContentButton>
      </S.Box>
      <S.ImageContainer />
    </S.Container>
  )
}
