import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
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
`
