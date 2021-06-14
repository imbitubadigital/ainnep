import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import AppProvider from '../hooks'
import GlobalStyle from '../styles/global'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  )
}

export default MyApp
