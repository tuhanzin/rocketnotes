import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./Styles/global"
import theme from './Styles/theme'

import { Details } from './pages/Details'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <Details />
    </ThemeProvider>
  </StrictMode>,
)
