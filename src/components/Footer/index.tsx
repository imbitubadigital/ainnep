import Image from 'next/image'
import { Social } from '../Social'
import * as S from './styles'

// import {} from './interfaces';

export function Footer(): JSX.Element {
  return (
    <S.Container>
      <S.ContentLeft>
        <Image src="/logo-footer.svg" width="167px" height="179px" />
        <S.Infos>
          <li>
            <small>Atendimento</small>
            <span>SEG À SAB das 07:00 às 18:00</span>
          </li>
          <li>
            <small>Contado</small>
            <span>(11) 4401-0000 | (11) 4400-4404</span>
          </li>
          <li>
            <small>Endereço</small>
            <span>Av. Perimetral, 3006, Centro, Santo André - SP</span>
          </li>
        </S.Infos>
      </S.ContentLeft>
      <S.ContentRight>
        <S.BoxButton>
          <h6>Acesse:</h6>
          <div>
            <button>
              <span>Painel do</span>
              Paciente
            </button>
            <button>
              <span>Painel do</span>
              Profissional
            </button>
          </div>
          <p>SEJA UM AMIGO DA AINNEP</p>
        </S.BoxButton>

        <Social isBottom />
      </S.ContentRight>
    </S.Container>
  )
}
