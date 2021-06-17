import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.header1},
    ${props => props.theme.colors.header2}
  );
  width: 100%;

  z-index: 100;

  @media (min-width: 960px) {
    clip-path: ellipse(110% 100% at 50% 0%);
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 300px;
  justify-content: space-between;

  @media (max-width: 1366px) {
    height: 270px;
  }

  @media (max-width: 960px) {
    height: 90px;
    justify-content: center;
  }
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 263px;

    @media (max-width: 360px) {
      width: 200px;
    }
  }
`

interface PropsMenu {
  isOpen: boolean
}
export const Menu = styled.div<PropsMenu>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @media (max-width: 960px) {
    background-image: linear-gradient(
      to bottom,
      ${props => props.theme.colors.header2},
      ${props => lighten(0.2, props.theme.colors.header2)}
    );

    flex-direction: column;
    justify-content: space-between;

    position: fixed;
    max-width: 320px;
    width: 100%;
    margin-left: 0;
    z-index: 300;
    height: 100vh;

    left: 0;
    top: 90px;
    transform: ${props =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${props => props.theme.colors.textSecondary};
    font-weight: 700;
    font-size: ${props => props.theme.typography.h1.size};
    line-height: ${props => props.theme.typography.h1.lineWeight};
    text-align: center;
  }

  @media (max-width: 960px) {
    display: none;
  }
`
