import styled from 'styled-components'

export const Container = styled.div`
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
`
