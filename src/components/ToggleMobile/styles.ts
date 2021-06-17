import styled from 'styled-components'
interface PropsToggleMenu {
  isOpen: boolean
}
export const Container = styled.button<PropsToggleMenu>`
  border: 0;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    background: ${props => props.theme.colors.primary};
    height: 3px;
    width: 24px;
    margin: 2px 0;
    border-radius: 5px;
    transform: translateY(0px);
    transition: all 0.2s ease 0s;

    &:first-child {
      transform: ${props =>
        props.isOpen
          ? 'rotate(-45deg) translate(-6px, 6px)'
          : 'rotate(0deg) translate(0px, 0px)'};
    }

    &:nth-child(2) {
      opacity: ${props => (props.isOpen ? 0 : 1)};
    }

    &:last-child {
      transform: ${props =>
        props.isOpen
          ? 'rotate(45deg) translate(-4px, -4px)'
          : 'rotate(0deg) translate(0px, 0px)'};
    }
  }

  @media (min-width: 960px) {
    display: none;
  }
`
