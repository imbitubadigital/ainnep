import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.header1},
    ${props => props.theme.colors.header2}
  );
  width: 100%;
  clip-path: ellipse(120% 100% at 50% 0%);
`
export const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 410px;
  justify-content: space-between;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 263px;
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
`
