import { Right } from './../Presentation/styles'
import styled from 'styled-components'
import { darken } from 'polished'
export const Container = styled.div`
  background-image: url('/professional.svg');
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 800px;
  display: flex;
  justify-content: flex-end;
`
export const Content = styled.div`
  width: 720px;

  padding-top: 8rem;
`
export const Box = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 1rem;
`
export const ContentBox = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 2rem 4rem;
  h6,
  p {
    font-weight: 900;
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.typography.subtitle1.size};
  }
  h6 {
    margin-bottom: 1rem;
  }
`
export const ContentButton = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 6px;
    padding: 2rem 2rem;
    transition: all 0.3s;
    background-image: linear-gradient(
      to Right,
      ${props => props.theme.colors.secondaryDark},
      ${props => props.theme.colors.secondary}
    );
    span {
      font-weight: 900;
      color: ${props => props.theme.colors.textSecondary};
      font-size: ${props => props.theme.typography.subtitle1.size};
    }

    svg {
      width: 60px;
      height: 60px;
      color: #fff;
      margin-right: 1rem;
    }

    &:hover {
      background-image: linear-gradient(
        to Right,
        ${props => darken(0.08, props.theme.colors.secondaryDark)},
        ${props => darken(0.08, props.theme.colors.secondary)}
      );
    }
  }
`
