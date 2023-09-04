'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

export function Input({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}: InputProps) {
  return (
    <>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={label}
        type={type}
        className={`
        peer
        border-b-2
        border-purple-500
        focus:border-b-4
        w-full
        p-2
        pt-6
        font-light
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        placeholder:uppercase
        placeholder:tracking-[0.2rem]
      `}
      />
    </>
  )
}
