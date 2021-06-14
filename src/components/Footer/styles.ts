import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to Right,
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.secondaryDark}
  );

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-top: 8rem;
`
export const Infos = styled.ul`
  list-style: none;
  margin: 1rem 2rem;
  li {
    margin: 1rem 0;
    small,
    span {
      color: ${props => props.theme.colors.textSecondary};
      font-size: ${props => props.theme.typography.body2.size};
    }
    small {
      display: block;
      font-weight: 700;
    }
    span {
      display: block;
      font-weight: 400;
    }
  }
`
export const BoxButton = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 1rem 2rem;

  color: ${props => props.theme.colors.textSecondary};
  h6 {
    font-size: ${props => props.theme.typography.h3.size};
    margin-bottom: 1rem;
  }

  div {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: 0;
      background: ${props => props.theme.colors.primary};
      flex-basis: 45%;
      color: ${props => props.theme.colors.textSecondary};
      padding: 0.5rem 1rem;
      border-radius: 6px;
      text-align: left;
      font-size: ${props => props.theme.typography.subtitle2.size};
      transition: all 0.3s;

      span {
        font-weight: 700;
        display: block;
        font-size: ${props => props.theme.typography.body2.size};
      }

      &:hover {
        background: ${props => darken(0.05, props.theme.colors.primary)};
      }
    }
  }
  p {
    font-weight: 700;
    font-size: ${props => props.theme.typography.body1.size};
    text-align: center;
  }
`
