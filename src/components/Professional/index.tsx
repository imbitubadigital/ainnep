import * as S from './styles'

import { GrChatOption } from 'react-icons/gr'
import { BsChatSquareDots } from 'react-icons/bs'
// import {} from './interfaces';

// Content = styled.div``
// export const Box = styled.div``
// export const ContentBox = styled.div`
//   h6 {
//   }
//   p {
//   }
// `
// export const ContentButton = styled.div`
//   button {
//   }

export function Professional(): JSX.Element {
  return (
    <S.Container>
      <S.Content>
        <S.Box>
          <S.ContentBox>
            <h6>Aos Profissionais</h6>
            <p>
              Sua colaboração é muito bem vinda, entre em contato e saiba como
              fazer parte do time de profissionais da associação AINNEP
            </p>
          </S.ContentBox>
        </S.Box>
        <S.ContentButton>
          <button type="button">
            <BsChatSquareDots />
            <span>Cadastre seus serviços</span>
          </button>
        </S.ContentButton>
      </S.Content>
    </S.Container>
  )
}
