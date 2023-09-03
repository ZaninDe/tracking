'use client'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  thin?: boolean
  color?: string
}

export const Heading = ({
  title,
  subtitle,
  center,
  thin,
  color = 'red-200',
}: HeadingProps) => {
  const textColor = `text-${color}`
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div
        className={`text-2xl ${thin ? 'font-light' : 'font-bold'} ${textColor}`}
      >
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  )
}
