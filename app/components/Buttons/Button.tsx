'use client'

import { MouseEvent } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  outline?: boolean
  small?: boolean
  icon?: IconType
}

export function Button({
  label,
  onClick,
  disabled,
  type,
  outline,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'bg-purple-500'}
        ${outline ? 'border-neutral-950' : ''}
        ${outline ? 'text-neutral-950' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  )
}
