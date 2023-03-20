import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Index'
import Survey from './pages/Survey/Index'
import PageError from './pages/PageError/Index'
import Layout from './components/Layout/Index'
import Freelances from './pages/Freelances/Index'
import Results from './pages/Results/Index'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
    </Router>
  )
}

export default App
