import styled from 'styled-components'
import Image from 'next/image'
export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto;
  padding: 0 1rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid ${props => props.theme.colors.textPrimary};
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
`

export const ContentIconImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`

export const ImgLeft = styled(Image)``
export const ImgRight = styled(Image)``
