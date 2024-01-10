import { useState } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import Login from './Components/Login';
import SignUp from './Components/SignUp';


function App() {

  return (
    <>
    <Toaster position='top-center' toastOptions={{duration: 3000}}/>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </>
  )
}

export default App
