import * as S from './styles'
import Image from 'next/image'
import { ButtonLink } from '../ButtonLink'

export function Welcome(): JSX.Element {
  return (
    <S.Container>
      <S.Content>
        <S.ContentImgLeft>
          <S.ImgLeft src="/woman_left.svg" height="279px" width="181px" />
        </S.ContentImgLeft>
        <S.CenterContent>
          <h3>
            Nós da associação AINNEP, nos colocamos a disposição da sociedade em
            prol de promover de forma transparente e acessível a saúde mental.
          </h3>
          <S.ContentIconImg>
            <S.ContentImgRight>
              <Image src="/img1.svg" height="108px" width="101px" />
            </S.ContentImgRight>
            <Image src="/img2.svg" height="108px" width="101px" />
            <Image src="/img3.svg" height="108px" width="101px" />
          </S.ContentIconImg>
          <ButtonLink href="/" title="Conheça agora a associação AINNEP" />
        </S.CenterContent>
        <S.ContentImgRight>
          <S.ImgRight src="/woman_right.svg" height="288px" width="216px" />
        </S.ContentImgRight>
      </S.Content>
    </S.Container>
  )
}
