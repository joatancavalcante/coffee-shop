import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/theme/light"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartContext"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>  
  )
}

export default App
