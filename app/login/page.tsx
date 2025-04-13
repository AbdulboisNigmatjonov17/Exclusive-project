import Auth from '@/components/auth/Auth'
import Login from '@/components/auth/Login'
import React from 'react'

export default function SignIn() {
  return (
    <>
      <Auth component={<Login />} />
    </>
  )
}
