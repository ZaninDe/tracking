import { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { redirect } from 'next/navigation'

interface AuthLayoutProps {
  children: ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return <>{children}</>
}
