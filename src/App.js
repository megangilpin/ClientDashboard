import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './themes/theme'
import Admin from './pages/Admin'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Admin />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
