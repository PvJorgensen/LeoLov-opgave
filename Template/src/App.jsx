import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Nav } from './components'
import { Header } from './components/header/header.jsx'

function App() {


  return (
    <>
     <Router>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
     </Router>
     <Header></Header>
    </>
  )
}

export default App
