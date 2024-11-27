import { useState } from 'react'
import Log from './pages/Log'
import Home from './pages/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (<>
   
    <Router>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/Log' element={<Log />}/>
      </Routes>
    </Router>
 </>     ) 
}

export default App
