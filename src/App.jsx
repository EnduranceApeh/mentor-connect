import {Route, Routes} from "react-router-dom";

import Home from './pages/home/Home'
import Signup from "./pages/form/SignUp";
import Login from "./pages/form/Login";
import ExploreMentor from "./pages/mentee/ExploreMentor";
import RequestStatus from "./pages/mentee/RequestStatus";

import MenteeLayout from "./pages/mentee/MenteeLayout";
import MentorProfile from "./components/ui/MentorProfile";



import MentorLayout from "./pages/mentor/MentorLayout";
import MentorEditProfile from "./pages/mentor/MentorEditProfile";
import Requests from "./pages/mentor/Requests";

import './App.css'
import ProtectedRoute from "./components/ProtectedRoute";

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
  

      <Route element={<ProtectedRoute allowedRole="mentee"/>}>
        <Route path="/mentee" element={<MenteeLayout />}>
          <Route index element={<ExploreMentor />} />
          <Route path="/mentee/request-status" element={<RequestStatus />}/>
          <Route path="mentor/:id" element={<MentorProfile />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRole="mentor" />}>
        <Route path="/mentor" element={<MentorLayout />}>
          <Route index element={<MentorEditProfile />} />
          <Route path="/mentor/requests" element={<Requests />} />
          
        </Route>
      </Route>
    </Routes>
    

    </>
  )
}

export default App
