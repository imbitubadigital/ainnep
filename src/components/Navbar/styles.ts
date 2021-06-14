import styled from 'styled-components'
import { shade } from 'polished'
export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 32px;
  }

  a {
    margin: 0 1rem;
    color: ${props => props.theme.colors.textSecondary};
    font-weight: bold;
    transition: color 0.2s;

    font-size: ${props => props.theme.typography.body1.size};

    &:hover {
      color: ${props => shade(0.1, props.theme.colors.textSecondary)};
    }
  }
`
