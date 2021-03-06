import { SiteProps } from './interfaces'
import { Header } from '../../Header'
import ScrollTop from '../../ScrollTop'

import * as S from './styles'
import { Footer } from '../../Footer'
import { useEffect, useRef } from 'react'
import { useScroll } from '../../../hooks/Scroll'

export function TemplateSite({ children }: SiteProps): JSX.Element {
  const { setScrollTop } = useScroll()

  const refContainer = useRef(null)
  const handleScroll = () => {
    if (refContainer.current) {
      setScrollTop(refContainer.current.getBoundingClientRect().top)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])
  return (
    <>
      <S.Container ref={refContainer}>
        <Header />
        <S.Content>{children}</S.Content>
        <Footer />
      </S.Container>

      <ScrollTop />
    </>
  )
}
