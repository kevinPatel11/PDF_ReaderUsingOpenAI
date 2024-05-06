"use client"
import React from 'react'
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <div className='bg-[#2c3636] h-screen flex flex-col items-center justify-center text-center'>
        <button onClick={()=> signIn('google')} className='text-purple-400 font-bold text-4xl animate-bounce'>
            Sign in to SkillSync
        </button>
    </div>
  )
}

export default Login;