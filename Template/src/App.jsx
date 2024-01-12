import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Footer } from './components/footer/Footer.jsx';
import { Home, Advokaterne, Kontakt, Om } from './pages'
import { Nav } from './components'
import './App.scss'


function App() {


  return (
    <>

      
     <Router>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/advokaterne" Component={Advokaterne} />
        <Route path="/om" Component={Om} />
        <Route path="/kontakt" Component={Kontakt} />
      </Routes>
        <Footer></Footer>
     </Router>
    </>
  )
}

export default App