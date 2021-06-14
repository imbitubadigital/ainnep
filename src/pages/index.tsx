import Head from 'next/head'

import { Header } from '../components/Header'
import { Welcome } from '../components/Welcome'
import { InitialPosts } from '../components/InitialPosts'
import { ServicesCards } from '../components/ServicesCards'
import { RegistrationAction } from '../components/RegistrationAction'
import { Presentation } from '../components/Presentation'
import { Professional } from '../components/Professional'
import { Company } from '../components/Company'
import { Footer } from '../components/Footer'

import * as S from '../styles/pages/home'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ainnep</title>
      </Head>
      <S.Container>
        <Header />
        <Welcome />
        <InitialPosts />
        <ServicesCards />
        <RegistrationAction />
        <Presentation />

        <Professional />

        <Company />

        {/* <ThemeSwitcher /> */}
        <Footer />
      </S.Container>
    </>
  )
}

export default Home
