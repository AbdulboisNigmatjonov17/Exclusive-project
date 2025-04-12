import React from 'react'

export default function Register() {
    return (
        <form className='max-w-[370px] w-full max-h-full flex items-center'>
            <div className='w-full h-[530px] flex flex-col gap-4'>
                <h1 class>Create an account</h1>
                <p>Enter your details below</p>
                <div className='flex flex-col'>
                    <input type="text" name='name' placeholder='Name' />
                </div>
                <div className='flex flex-col'>
                    <input type="email" name='email' placeholder='Email adress' />
                </div>
                <div className='flex flex-col'>
                    <input type="password" name='password' placeholder='Password' />
                </div>
                <button type='submit' className='w-full h-[55px] rounded-sm flex justify-center items-center bg-[#DB4444] text-white cursor-pointer hover:bg-[#aa4949]'>Create Account</button>
                <button type='submit' className='w-full h-[55px] rounded-sm flex justify-center items-center cursor-pointer border-[1px] border-[rgba(0,_0,_0,_0.4)] flex gap-4'><img src="/google.png" alt="google icon" /> Create Account</button>
            </div>
        </form>
    )
}
