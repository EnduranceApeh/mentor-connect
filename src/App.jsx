import {Route, Routes} from "react-router-dom";

import Home from './pages/home/Home'
import Signup from "./pages/form/SignUp";
import Login from "./pages/form/Login";
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
    </>
  )
}

export default App
