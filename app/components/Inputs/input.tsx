'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
}

export function Input({
  id,
  label,
  type,
  disabled,
  required,
  register,
}: InputProps) {
  return (
    <input
      id={id}
      disabled={disabled}
      {...register(id, { required })}
      placeholder=""
      type={type}
      className=""
    />
  )
}
