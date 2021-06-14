import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.article`
  box-shadow: 0px 5px 10.954px #dfdfdf;
  border-radius: 10px;
  flex-basis: 30%;
  border: 1px solid #dfdfdf;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s;

  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -moz-box-shadow: 0 15px 15px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 0 15px 15px rgba(0, 0, 0, 0.6);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.6);
  }
`
export const Content = styled.div`
  Header {
    margin: 1.5rem 0;

    h3 {
      font-weight: 700;
      font-size: ${props => props.theme.typography.subtitle1.size};
      line-height: ${props => props.theme.typography.subtitle1.size};
      color: ${props => props.theme.colors.primaryDark};
      text-align: left;
      margin-bottom: 1rem;
    }
    p {
      font-size: ${props => props.theme.typography.body2.size};
      line-height: ${props => props.theme.typography.body2.size};
      color: ${props => props.theme.colors.primaryDark};
      font-weight: 400;
      text-align: left;
    }
  }
`
export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: ${props => props.theme.typography.body2.size};
    line-height: ${props => props.theme.typography.body2.size};
    color: ${props => props.theme.colors.primaryLight};
    font-weight: 700;
    transition: all 0.3s;
    &:hover {
      color: ${props => darken(0.2, props.theme.colors.primaryLight)};
      span {
        background: ${props => darken(0.2, props.theme.colors.primaryDark)};
      }
    }
  }

  span {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: inline-block;
    background: ${props => props.theme.colors.primaryDark};
    margin-left: 1rem;
    transition: all 0.3s;
  }
`
