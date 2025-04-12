import Auth from '@/components/auth/Auth'
import Register from '@/components/auth/Register'
import React from 'react'

export default function SignUp() {
  return (
    <>
      <Auth component={<Register />} />
    </>
  )
}
