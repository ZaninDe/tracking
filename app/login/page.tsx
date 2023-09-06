'use client'
import Image from 'next/image'
import { Heading } from '../components/Heading'
import { greetingMessage } from '../utils/greetingMessage'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Inputs/input'
import { Button } from '../components/Buttons/Button'
import { LoginModal } from '../components/Modals/LoginModal'
import { RegisterModal } from '../components/Modals/RegisterModal'
import useLoginModal from '../hooks/useLoginModal'

export default function Login() {
  const router = useRouter()
  const [isLoading, setIsLoadint] = useState(false)
  const greeting = greetingMessage()
  const loginModal = useLoginModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

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
