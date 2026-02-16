import {Route, Routes} from "react-router-dom";

import Home from './pages/home/Home'
import Signup from "./pages/form/SignUp";
import Login from "./pages/form/Login";
import ExploreMentor from "./pages/mentee/ExploreMentor";
import RequestStatus from "./pages/mentee/RequestStatus";

import MenteeLayout from "./pages/mentee/MenteeLayout";
import MentorEditProfile from "./pages/mentor/MentorEditProfile";

import './App.css'

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
      <Route path="/mentor" element={<MentorEditProfile />}></Route>

      <Route path="/mentee" element={<MenteeLayout />}>
        <Route index element={<ExploreMentor />} />
        <Route path="/mentee/request-status" element={<RequestStatus />}/>
      </Route>
    </Routes>
    

    </>
  )
}

export default App
