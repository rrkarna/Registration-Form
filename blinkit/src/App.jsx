
import Signup from "./components/Signup/Signup";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
function App() {
 

  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
