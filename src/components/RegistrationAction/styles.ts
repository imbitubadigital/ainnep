import { darken } from 'polished'
import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto;
  padding: 4rem 1rem;
  background: ${props => props.theme.colors.backgroundSecondary};
  text-align: center;
  border-radius: 10px;
`
export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;

  h4 {
    font-weight: 900;
    color: ${props => props.theme.colors.primaryDark};
    font-size: ${props => props.theme.typography.h3.size};
    line-height: ${props => props.theme.typography.h3.size};
    margin-bottom: 1rem;
  }

  a {
    font-weight: 700;
    color: ${props => props.theme.colors.textPrimary};
    font-size: ${props => props.theme.typography.body1.size};
    line-height: ${props => props.theme.typography.body1.size};
    transition: color 0.3s;

    &:hover {
      color: ${props => darken(0.2, props.theme.colors.textPrimary)};
    }
  }
`
