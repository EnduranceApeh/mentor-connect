import {Route, Routes} from "react-router-dom";

import Home from './pages/home/Home'
import Signup from "./pages/form/SignUp";
import Login from "./pages/form/Login";
import ExploreMentor from "./pages/mentee/ExploreMentor";
import RequestStatus from "./pages/mentee/RequestStatus";

import './App.css'
import MenteeLayout from "./pages/mentee/MenteeLayout";

function App() {

  return (
    <>
    <Routes>
      <Route 
        path="/" 
        element={
        <>
        <Home /> 
        </>
        }/>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/mentee" element={<MenteeLayout />}>
        <Route index element={<ExploreMentor />} />
        <Route path="/mentee/request-status" element={<RequestStatus />}/>
      </Route>
    </Routes>
    

    </>
  )
}

export default App
