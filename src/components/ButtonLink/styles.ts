import styled from 'styled-components'

import { darken } from 'polished'
export const Container = styled.div`
  width: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
    font-weight: 900;
    font-size: ${props => props.theme.typography.subtitle1.size};
    color: ${props => props.theme.colors.textSecondary};
    text-align: center;
    margin-top: 3rem;
    transition: 0.3s;
    padding: 1rem;
    &:hover {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
  }
`
