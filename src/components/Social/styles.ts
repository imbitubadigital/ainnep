import styled from 'styled-components'
import { shade } from 'polished'
interface PropsContainer {
  isBottom: boolean
}
export const Container = styled.div<PropsContainer>`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 32px;
  }

  a + a {
    margin-left: 1rem;
  }

  img {
    width: 26px;
  }

  svg {
    color: ${props => props.theme.colors.textSecondary};
    transition: color 0.2s;
    &:hover {
      color: ${props => shade(0.1, props.theme.colors.textSecondary)};
    }
  }

  @media (max-width: 960px) {
    background: ${props =>
      props.isBottom ? 'transparent' : props.theme.colors.header1};
    margin-bottom: ${props => (props.isBottom ? 0 : '90px')};
    width: 100%;
    justify-content: space-evenly;
    padding: ${props => (props.isBottom ? 0 : '1rem')};
  }
`
