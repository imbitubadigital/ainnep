import { lighten } from 'polished'
import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const Left = styled.div`
  flex-basis: 35%;
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
    font-weight: 700;
    font-size: ${props => props.theme.typography.body2.size};
    color: ${props =>
      props.checked
        ? props.theme.colors.background
        : props.theme.colors.textPrimary};
  }
  h5 {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background: ${props => lighten(0.2, props.theme.colors.primary)};

    h5,
    p {
      color: ${props => props.theme.colors.textPrimary};
    }
  }
`
export const Right = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.backgroundSecondary};
  padding: 1rem;
  border-radius: 8px;
`
export const ContentRight = styled.div`
  background: ${props => props.theme.colors.background};
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25;
  height: 0;
`
