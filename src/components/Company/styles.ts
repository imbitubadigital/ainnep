import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 6rem;
  @media (max-width: 720px) {
    margin-top: 4rem;
  }
`

export const Box = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 3rem;
  width: 50%;

  text-align: center;
  margin-left: 4%;
  h6,
  p {
    font-weight: 900;
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.typography.subtitle1.size};
    margin-bottom: 1rem;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 6px;
    padding: 2rem 2rem;
    background: ${props => props.theme.colors.background};
    width: 100%;
    transform: all 0.3s;
    span {
      font-weight: 900;
      color: ${props => props.theme.colors.secondary};
      font-size: ${props => props.theme.typography.subtitle1.size};
    }

    svg {
      color: ${props => props.theme.colors.secondary};
      margin-right: 1rem;
      width: 72px;
      height: 72px;
    }

    &:hover {
      background: ${props => lighten(0.2, props.theme.colors.primary)};
    }
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  background-image: url('/company.svg');
  background-repeat: no-repeat;
  background-position: bottom left -30px;
  background-size: contain;

  @media (max-width: 1700px) {
    background-size: cover;
  }
  @media (max-width: 425px) {
    display: none;
  }
`
