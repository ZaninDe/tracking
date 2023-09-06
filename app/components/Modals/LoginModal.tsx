'use client'

import useLoginModal from '@/app/hooks/useLoginModal'
import { signIn } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'

import { Input } from '../Inputs/input'
import { Heading } from '../Heading'
import { Modal } from './Modal'
import { Button } from '../Buttons/Button'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export function LoginModal() {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const toggle = useCallback(() => {
    loginModal.onClose()
    registerModal.onOpen()
  }, [loginModal, registerModal])

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
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      callbackUrl: '/',
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success('Usuário logado.')
        router.refresh()
        loginModal.onClose()
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  const test = <div>hello</div>

  const bodyContent = (
    <div className="flex flex-col gap-4">
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
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-4">
      <hr />
      <Button label="Entre com o Google" icon={FcGoogle} outline />
      <div className="text-center mt-4 font-light">
        <div className="flex justify-center items-center gap-2">
          <div>Primeira vez usando a plataforma?</div>
          <div
            className="text-neutral-500 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Criar conta
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Entre com sua conta"
      actionLabel="Entrar"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
