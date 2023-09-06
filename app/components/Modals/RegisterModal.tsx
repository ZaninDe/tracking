'use client'

import axios from 'axios'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'

import { Input } from '../Inputs/input'
import { Modal } from './Modal'
import { Button } from '../Buttons/Button'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { toast } from 'react-hot-toast'

export function RegisterModal() {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

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
    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose()
        loginModal.onOpen()
      })
      .catch((err) => {
        toast.error('Something went wrong.')
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const toggle = useCallback(() => {
    registerModal.onClose()
    loginModal.onOpen()
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        required
        errors={errors}
      />
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
        label="Senha"
        disabled={isLoading}
        register={register}
        required
        errors={errors}
        type="password"
      />
      <Input
        id="password_confirmation"
        label="Confirme a senha"
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
          <div>Já possui conta?</div>
          <div
            className="text-neutral-500 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Entrar
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Criar uma conta"
      actionLabel="Entrar"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
