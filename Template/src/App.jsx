import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Nav } from './components'

function App() {


  return (
    <>
     <Router>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
     </Router>
    </>
  )
}

export default App
