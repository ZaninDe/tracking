'use client'
import Image from 'next/image'
import { Heading } from '../components/Heading'
import { greetingMessage } from '../utils/greetingMessage'
export default function Login() {
  const greeting = greetingMessage()
  return (
    <div className="h-screen w-screen bg-purple-pink py-[5%] px-[3%]">
      <div className="w-full h-full bg-white rounded-2xl flex flex-row">
        <div className="w-[55%]">
          <Image
            className="w-full h-full"
            src="/images/login_img.jpg"
            alt="login image"
            width={500}
            height={500}
            quality={100}
          />
        </div>
        <div className="w-[45%] h-full p-16 flex flex-col gap-4 justify-center">
          <Heading title="Hello!" thin />
          <Heading title={greeting} />
          <div className="w-full mt-8">
            <h1 className="text-xl text-neutral-700 text-center">
              <span className="text-purple-500 font-semibold">Entre</span> com
              sua conta
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
