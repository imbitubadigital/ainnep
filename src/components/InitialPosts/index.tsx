import * as S from './styles'
import { Post } from './Post'
// import {} from './interfaces';

export function InitialPosts(): JSX.Element {
  return (
    <S.Container>
      <Post />
      <Post />
    </S.Container>
  )
}
