import { darken } from 'polished'
import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  margin: 6rem auto 0;

  padding: 0 4rem;
  max-width: 1380px;
  @media (max-width: 1366px) {
    max-width: 1200px;
  }
  @media (max-width: 425px) {
    max-width: 1200px;
    padding: 0 2rem;
  }
`
export const Content = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.backgroundSecondary};
  text-align: center;
  border-radius: 10px;
  padding: 4rem;

  h4 {
    font-weight: 900;
    color: ${props => props.theme.colors.primaryDark};
    font-size: ${props => props.theme.typography.h3.size};
    line-height: ${props => props.theme.typography.h3.lineWeight};
    margin-bottom: 1rem;
  }

  a {
    font-weight: 700;
    color: ${props => props.theme.colors.textPrimary};
    font-size: ${props => props.theme.typography.body1.size};
    line-height: ${props => props.theme.typography.body1.lineWeight};
    transition: color 0.3s;

    &:hover {
      color: ${props => darken(0.2, props.theme.colors.textPrimary)};
    }
  }
`
