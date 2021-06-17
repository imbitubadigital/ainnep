import Head from 'next/head'
import { Welcome } from '../components/Welcome'
import { InitialPosts } from '../components/InitialPosts'
import { ServicesCards } from '../components/ServicesCards'
import { RegistrationAction } from '../components/RegistrationAction'
import { Presentation } from '../components/Presentation'
import { Professional } from '../components/Professional'
import { Company } from '../components/Company'
// import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { TemplateSite } from '../components/_templates/Site'
const Home: React.FC = () => {
  return (
    <>
      <TemplateSite>
        <Head>
          <title>Ainnep</title>
        </Head>

        <Welcome />
        <InitialPosts />
        <ServicesCards />
        <RegistrationAction />
        <Presentation />
        <Professional />
        <Company />
        {/* <ThemeSwitcher /> */}
      </TemplateSite>
    </>
  )
}

export default Home
