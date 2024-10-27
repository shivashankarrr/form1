import Home from './Home'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './App.css'
import SuccessMessage from './SuccessMessage'

function App() {

  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/success" element={<SuccessMessage></SuccessMessage>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
