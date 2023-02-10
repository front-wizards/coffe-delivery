import Router from './Router'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/DefaultTheme'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App
