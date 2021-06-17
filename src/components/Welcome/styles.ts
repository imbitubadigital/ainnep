import styled from 'styled-components'
import Image from 'next/image'
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

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid ${props => props.theme.colors.textPrimary};

  @media (max-width: 804px) {
    justify-content: center;
  }
`
export const CenterContent = styled.div`
  height: 390px;
  width: 100%;
  max-width: 650px;

  h3 {
    text-align: center;
    font-size: ${props => props.theme.typography.body1.size};
    line-height: ${props => props.theme.typography.body1.lineWeight};
    font-weight: 700;
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 2rem;
  }

  @media (max-width: 1366px) {
    max-width: 500px;
  }

  @media (max-width: 804px) {
    height: 340px;
  }
`

export const ContentIconImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`

export const ContentImgLeft = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 960px) {
    display: none;
  }
`
export const ContentImgRight = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 804px) {
    display: none;
  }
`
export const ImgLeft = styled(Image)``
export const ImgRight = styled(Image)``
