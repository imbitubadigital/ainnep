import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 6rem 0;
  flex-wrap: nowrap;

  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`
export const ContentLeft = styled.div`
  flex-basis: 47%;

  h3 {
    font-weight: 700;
    font-size: ${props => props.theme.typography.h2.size};
    line-height: ${props => props.theme.typography.h2.lineWeight};
    color: ${props => props.theme.colors.textPrimary};
  }
  @media (max-width: 720px) {
    flex-basis: 100%;
  }
`
export const ContentRight = styled.div`
  flex-basis: 47%;
  padding-top: 3rem;

  p {
    font-weight: 700;
    font-size: ${props => props.theme.typography.body1.size};
    line-height: ${props => props.theme.typography.body1.lineWeight};
    color: ${props => props.theme.colors.textPrimary};
  }
  @media (max-width: 720px) {
    flex-basis: 100%;
    padding-top: 2rem;
  }
`
