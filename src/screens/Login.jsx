import React from 'react'

function Login() {
  return (
    <div className='flex flex-col bg-white w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-2 border-black p-10'>
        <h1 className='text-5xl font-semibold'>Login </h1>
        <p className='my-5'>Enter your details below</p>
        <input className='border-2 rounded-md border-grey-900 outline-blue-500 text-3xl p-2 mt-2' type="email"placeholder="Email" />
        <input className='border-2 rounded-md border-grey-900 outline-blue-500 text-3xl p-2 mt-2' type="password"placeholder="Password" />
        <button className='bg-red-600 focus:bg-green-600 text-3-xl p-2 w-full text-3xl mt-4 text-white rounded-lg py-3'>Login</button>
        
        <p className="my-5 flex items-center justify-center">
          Do not have an acount?
          <a href="http://localhost:3000/register">Register</a>
        </p>
        </div>
    </div>
  )
}

export default Login