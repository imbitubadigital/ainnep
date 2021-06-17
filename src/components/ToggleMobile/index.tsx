import * as S from './styles'
import { PropsToggleMobile } from './interfaces'
export function ToggleMobile({
  isOpen,
  setIsOpen
}: PropsToggleMobile): JSX.Element {
  return (
    <S.Container onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <span />
      <span />
      <span />
    </S.Container>
  )
}
