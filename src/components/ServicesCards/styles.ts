import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto;
  padding: 0 1rem;
  header {
    h3 {
      text-align: center;
      font-weight: 700;
      font-size: ${props => props.theme.typography.h1.size};
      line-height: ${props => props.theme.typography.h1.size};
      color: ${props => props.theme.colors.primaryDark};
      max-width: 550px;
      margin: 0 auto 2rem;
    }
    p {
      text-align: center;
      font-weight: 700;
      font-size: ${props => props.theme.typography.body1.size};
      line-height: ${props => props.theme.typography.body1.size};
      color: ${props => props.theme.colors.textPrimary};
      max-width: 950px;
      margin: 0 auto 2rem;
    }
  }
`

export const Content = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`
