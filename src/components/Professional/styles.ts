import styled from 'styled-components'
import { darken } from 'polished'
export const Container = styled.div`
  @media (min-width: 720px) {
    background-image: url('/professional.svg');
  }

  background-repeat: no-repeat;
  background-position: left 15% top;
  background-size: contain;
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
  @media (max-width: 1366px) {
    background-position: left 0 bottom;
  }
  @media (max-width: 720px) {
    padding: 0 4rem;
  }
  @media (max-width: 425px) {
    padding: 0 2rem;
  }
`
export const Content = styled.div`
  width: 55%;
  padding-top: 8rem;

  @media (max-width: 1366px) {
    background-position: left 0 bottom;
    width: 820px;
  }
  @media (max-width: 1080px) {
    background-position: left 0 bottom;
    width: 620px;
  }
  @media (max-width: 860px) {
    background-position: left 0 bottom;
    padding-top: 0rem;
    width: 420px;
  }
  @media (max-width: 720px) {
    width: 100%;
    margin: 0 auto;
  }
`
export const Box = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 1rem;
`
export const ContentBox = styled.div`
  width: 100%;
  max-width: 700px;
  // max-width: 700px;
  padding: 4rem;
  h6,
  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.typography.subtitle1.size};
  }
  h6 {
    margin-bottom: 1rem;
    font-weight: 900;
  }
  p {
    line-height: ${props => props.theme.typography.subtitle1.lineWeight};
    font-weight: 700;
  }
  @media (max-width: 720px) {
    padding: 2rem;
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
