'use client'
import { signOut } from 'next-auth/react'
import { Button } from './Button'

export const SignOut = () => {
  return (
    <div onClick={() => signOut()} className="cursor-pointer underline">
      Sair
    </div>
  )
}
