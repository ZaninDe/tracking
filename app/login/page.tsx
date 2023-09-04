'use client'
import Image from 'next/image'
import { Heading } from '../components/Heading'
import { greetingMessage } from '../utils/greetingMessage'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Inputs/input'
import { Button } from '../components/Button'
import { LoginModal } from '../components/Modals/LoginModal'

export default function Login() {
  const router = useRouter()
  const [isLoading, setIsLoadint] = useState(false)
  const greeting = greetingMessage()

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

  return (
    <div className="h-screen w-screen bg-purple-pink py-[5%] px-[3%]">
      <div className="w-full h-full bg-white rounded-2xl flex flex-row">
        <div className="w-[55%]">
          <Image
            className="w-full h-full rounded-l-2xl"
            src="/images/login_img.jpg"
            alt="login image"
            width={500}
            height={500}
            quality={100}
          />
        </div>
        <div className="w-[45%] h-full p-16 flex flex-col gap-4 justify-center">
          <Heading title="Olá," thin />
          <Heading title={greeting} />
          <LoginModal />
          {/* <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              required
              errors={errors}
            />

            <Input
              id="password"
              label="Password"
              disabled={isLoading}
              register={register}
              required
              errors={errors}
              type="password"
            />

            <Button label="Entrar" type="submit" />
          </form> */}
        </div>
      </div>
    </div>
  )
}
