import { lighten } from 'polished'
import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  max-width: 1380px;
  margin: 5rem auto 0;
  padding: 0 4rem;
  flex-wrap: nowrap;
  @media (max-width: 1366px) {
    max-width: 1200px;
  }

  @media (max-width: 960px) {
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 425px) {
    padding: 0 2rem;
  }
`
export const Left = styled.div`
  flex-basis: 32%;
  margin-right: 2rem;

  @media (max-width: 960px) {
    margin-right: 0;
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

interface PropsChecked {
  checked?: boolean
}
export const Item = styled.button<PropsChecked>`
  border: 0;
  margin-bottom: 1rem;
  background: ${props =>
    !props.checked
      ? props.theme.colors.background
      : props.theme.colors.primary};
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s;

  h5,
  p {
    transition: all 0.3s;
    text-align: left;

    font-size: ${props => props.theme.typography.body2.size};

    color: ${props =>
      props.checked
        ? props.theme.colors.background
        : props.theme.colors.textPrimary};
  }
  h5 {
    margin-bottom: 1rem;
    font-weight: 900;
  }
  p {
    margin-bottom: 0.5rem;
    line-height: ${props => props.theme.typography.body2.lineWeight};
    font-weight: 700;
  }

  &:hover {
    background: ${props => lighten(0.2, props.theme.colors.primary)};

    h5,
    p {
      color: ${props => props.theme.colors.textPrimary};
    }
  }
  @media (max-width: 960px) {
    flex-basis: 45%;
    margin-right: 0;
  }

  @media (max-width: 720px) {
    h5 {
      margin-bottom: 0;
    }
    p {
      display: none;
    }
  }
  @media (max-width: 320px) {
    flex-basis: 100%;
  }
`
export const Right = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.backgroundSecondary};
  padding: 1rem;
  border-radius: 8px;
  @media (max-width: 960px) {
    flex-basis: 100%;
  }
`
export const ContentRight = styled.div`
  background: ${props => props.theme.colors.background};
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25;
  height: 0;
`
