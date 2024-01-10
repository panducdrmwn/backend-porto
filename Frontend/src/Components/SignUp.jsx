import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'

export default function SignUp() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function signup(){
        const data = await axios.post('http://192.168.18.121:3000/signup', 
        {
            username, password
        })
        console.log(data)
        if (data.error){
            toast.error(data.error)
        } else {
            toast.success('Signup Success')
        }
    }

  return (
  

  <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

      
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input onChange={(e)=>setUsername(e.target.value)} type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md"/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md"/>
        </div>

        <button type="submit" onClick={signup} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</button>
     
    </div>
  </div>


  )
}
