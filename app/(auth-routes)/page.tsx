'use client'
import { Heading } from '@/app/components/Heading'
import useLoginModal from '@/app/hooks/useLoginModal'
import { greetingMessage } from '@/app/utils/greetingMessage'
import { useEffect } from 'react'

export default function Home() {
  const greeting = greetingMessage()
  const loginModal = useLoginModal()

  useEffect(() => {
    loginModal.onOpen()
  }, [])

  return (
    <div className="h-screen w-screen bg-purple-pink py-[5%] px-[3%]">
      <div className="h-full w-full p-16 flex flex-col gap-4 justify-start items-center">
        <Heading title="Olá," thin />
        <h1 className="text-white text-4xl font-bold">{greeting}</h1>
      </div>
    </div>
  )
}
