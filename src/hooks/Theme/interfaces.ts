import { Dispatch, SetStateAction } from 'react'

interface ThemeCustom {
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
    secondary: string
    background: string
    textPrimary: string
    textSecondary: string
    header1: string
    header2: string
  }
}
export interface ThemeCustomContextData {
  theme: ThemeCustom
  setTheme: Dispatch<SetStateAction<ThemeCustom>>
}
