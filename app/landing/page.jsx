'use client'
import Link from 'next/link'
import { useState } from 'react'
const Landing = () => {
    const [first, setFirst] = useState(0)

    const text = [
        {top: "Using The Newest", bot: "Blockchain Technology"},
        {top: "100% Secure,", bot: "Paperless, Convenient"},
        {top: "Account Protection", bot: ""},
    ]

    const handleChangeText = (newIndex) => {
        setFirst(newIndex);
      };

      const handleNext = () => {
        // Calculate the index of the next content
        const nextIndex = (first + 1) % text.length;
        setFirst(nextIndex);
    };

  return (
    <div className="font-bold text-[26px] flex flex-col items-center text-white h-full w-full pt-8">
        <div className="items-center flex flex-col justify-center h-full font-semibold">
        <h1>{text[first].top}</h1>
        <h1>{text[first].bot}</h1>
        </div>
        {first === 2 ? (
          <Link href="/signup">
          <span className='flex w-full justify-center'>
            <button className='mb-16 bg-white text-blue-500 px-6 py-2 text-[20px] rounded-xl font-semibold'>Create Account</button>
          </span>
        </Link>
          ): (null)}

        <div className="flex justify-between items-center w-full px-8 pb-16">
          <Link href="/signin">
            <p className="cursor-pointer font-normal text-blueish_grayey">Skip</p>
          </Link>
            <span className="flex justify-between w-[5rem]">
            {text.map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-full ${
                index === first ? 'bg-white' : 'bg-blueish_gray'
              }`}
              onClick={() => handleChangeText(index)}
            ></span>
          ))}
            </span>
            <p className="text-white cursor-pointer font-semibold" onClick={handleNext}>Next</p>
        </div>
    </div>
  )
}

export default Landing