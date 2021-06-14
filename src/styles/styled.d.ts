/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import theme from './theme'
export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string
    typography: {
      h1: {
        size: string
        lineWeight: string
      }
      h2: {
        size: string
        lineWeight: string
      }
      h3: {
        size: string
        lineWeight: string
      }
      h4: {
        size: string
        lineWeight: string
      }
      h5: {
        size: string
        lineWeight: string
      }
      h6: {
        size: string
        lineWeight: string
      }
      subtitle1: {
        size: string
        lineWeight: string
      }
      subtitle2: {
        size: string
        lineWeight: string
      }
      body1: {
        size: string
        lineWeight: string
      }
      body2: {
        size: string
        lineWeight: string
      }
    }
    colors: {
      primary: string
      primaryDark: string
      primaryLight: string
      secondary: string
      secondaryDark: string
      background: string
      backgroundSecondary: string
      textPrimary: string
      textSecondary: string
      header1: string
      header2: string
    }
  }
}
