import styled from 'styled-components'
import { shade } from 'polished'
export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
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
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    a {
      display: flex;
      width: 100%;
      margin: 0;
      justify-content: flex-start;
      padding-left: 1.5rem;
      align-items: center;
      &:hover {
        background: ${props => props.theme.colors.secondary};
      }
    }
  }
`
