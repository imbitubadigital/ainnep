import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1380px;
  margin: 5rem auto 0;
  padding: 0 4rem;

  @media (max-width: 1366px) {
    max-width: 1200px;
  }

  @media (max-width: 425px) {
    padding: 0 2rem;
  }

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
  @media (max-width: 1366px) {
    > header {
      h3 {
        max-width: 430px;
      }
      p {
        max-width: 740px;
      }
    }
  }
  @media (max-width: 1080px) {
    > header {
      h3 {
        max-width: 380px;
      }
      p {
        max-width: 680px;
      }
    }
  }
`

export const Content = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;

  @media (max-width: 804px) {
    flex-direction: column;
  }
`
